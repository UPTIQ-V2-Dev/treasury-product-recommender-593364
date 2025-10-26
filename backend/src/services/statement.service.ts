import prisma from '../client.ts';
import { BankStatement, SupportedFormat } from '../generated/prisma/index.js';
import { getInstance, getStorageProvider } from '../storage/main.ts';
import { StorageProvider } from '../storage/types.ts';
import ApiError from '../utils/ApiError.ts';
import httpStatus from 'http-status';

/**
 * Get all supported file formats
 * @returns {Promise<SupportedFormat[]>}
 */
const getSupportedFormats = async (): Promise<SupportedFormat[]> => {
    return await prisma.supportedFormat.findMany({
        orderBy: { extension: 'asc' }
    });
};

/**
 * Upload bank statement file
 * @param {Object} fileData - File upload data
 * @param {Buffer} fileBuffer - File buffer data
 * @param {number} userId - User ID
 * @returns {Promise<BankStatement>}
 */
const uploadStatement = async (
    fileData: {
        filename: string;
        fileSize: number;
        bankName?: string;
        accountType?: string;
        statementPeriod?: any;
    },
    fileBuffer: Buffer,
    userId: number
): Promise<BankStatement> => {
    // First, create the statement record to get an ID
    const statement = await prisma.bankStatement.create({
        data: {
            filename: fileData.filename,
            fileSize: fileData.fileSize,
            bankName: fileData.bankName,
            accountType: fileData.accountType,
            statementPeriod: fileData.statementPeriod || {},
            processingStatus: 'PENDING',
            userId
        }
    });

    try {
        // Get storage provider and instance
        const storageProvider = getStorageProvider();
        const storage = getInstance();

        // Create unique storage key using statement ID + timestamp + filename
        const timestamp = Date.now();
        const storageKey = `bank-statements/${statement.id}/${timestamp}_${fileData.filename}`;

        // Upload file to cloud storage
        const bucketName = process.env.STORAGE_BUCKET || 'bank-statements';

        await storage.uploadData({
            bucketName,
            data: fileBuffer,
            destinationKey: storageKey,
            contentType: getContentTypeFromFilename(fileData.filename)
        });

        // Generate signed URL for processing
        const signedUrl = await storage.generateDownloadSignedUrl({
            bucketName,
            key: storageKey,
            fileName: fileData.filename
        });

        // Update statement with cloud storage information
        const updatedStatement = await prisma.bankStatement.update({
            where: { id: statement.id },
            data: {
                cloudStorageUrl: `${storageProvider}://${bucketName}/${storageKey}`,
                signedUrl,
                storageProvider: storageProvider.toString(),
                storageKey,
                processingStatus: 'UPLOADED'
            }
        });

        return updatedStatement;
    } catch (error) {
        // If cloud storage fails, update statement status to failed
        await prisma.bankStatement.update({
            where: { id: statement.id },
            data: {
                processingStatus: 'FAILED'
            }
        });

        throw new ApiError(
            httpStatus.INTERNAL_SERVER_ERROR,
            `Failed to upload file to cloud storage: ${error instanceof Error ? error.message : 'Unknown error'}`
        );
    }
};

/**
 * Helper function to determine content type from filename
 * @param {string} filename - The filename
 * @returns {string} - Content type
 */
const getContentTypeFromFilename = (filename: string): string => {
    const extension = filename.toLowerCase().split('.').pop();
    switch (extension) {
        case 'pdf':
            return 'application/pdf';
        case 'csv':
            return 'text/csv';
        case 'xlsx':
            return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        case 'xls':
            return 'application/vnd.ms-excel';
        default:
            return 'application/octet-stream';
    }
};

/**
 * Get bank statement by ID
 * @param {string} id
 * @param {number} userId
 * @returns {Promise<BankStatement | null>}
 */
const getStatementById = async (id: string, userId?: number): Promise<BankStatement | null> => {
    const where: any = { id };
    if (userId) {
        where.userId = userId;
    }

    return await prisma.bankStatement.findUnique({
        where
    });
};

/**
 * Query bank statements for a user
 * @param {number} userId
 * @param {Object} options - Query options
 * @returns {Promise<BankStatement[]>}
 */
const getUserStatements = async (
    userId: number,
    options: {
        limit?: number;
        page?: number;
        sortBy?: string;
        sortType?: 'asc' | 'desc';
    } = {}
): Promise<BankStatement[]> => {
    const page = options.page ?? 1;
    const limit = options.limit ?? 10;
    const sortBy = options.sortBy ?? 'uploadedAt';
    const sortType = options.sortType ?? 'desc';

    return await prisma.bankStatement.findMany({
        where: { userId },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { [sortBy]: sortType }
    });
};

/**
 * Validate file format
 * @param {string} mimeType - File MIME type
 * @param {string} extension - File extension
 * @returns {Promise<boolean>}
 */
const validateFileFormat = async (mimeType: string, extension: string): Promise<boolean> => {
    const supportedFormat = await prisma.supportedFormat.findFirst({
        where: {
            mimeType,
            extension
        }
    });

    return !!supportedFormat;
};

/**
 * Update statement processing status
 * @param {string} id - Statement ID
 * @param {string} status - Processing status
 * @param {Object} additionalData - Additional data to update
 * @returns {Promise<BankStatement>}
 */
const updateStatementStatus = async (
    id: string,
    status: string,
    additionalData?: {
        bankName?: string;
        accountType?: string;
        statementPeriod?: any;
    }
): Promise<BankStatement> => {
    const statement = await getStatementById(id);
    if (!statement) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Bank statement not found');
    }

    const updateData: any = {
        processingStatus: status
    };

    if (additionalData) {
        if (additionalData.bankName) updateData.bankName = additionalData.bankName;
        if (additionalData.accountType) updateData.accountType = additionalData.accountType;
        if (additionalData.statementPeriod) updateData.statementPeriod = additionalData.statementPeriod;
    }

    return prisma.bankStatement.update({
        where: { id },
        data: updateData
    });
};

/**
 * Generate fresh signed URL for a bank statement
 * @param {string} id - Statement ID
 * @returns {Promise<string>}
 */
const generateSignedUrl = async (id: string): Promise<string> => {
    const statement = await getStatementById(id);
    if (!statement) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Bank statement not found');
    }

    if (!statement.storageKey || !statement.storageProvider) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Statement not uploaded to cloud storage');
    }

    try {
        const storage = getInstance({ storageProvider: statement.storageProvider as StorageProvider });
        const bucketName = process.env.STORAGE_BUCKET || 'bank-statements';

        const signedUrl = await storage.generateDownloadSignedUrl({
            bucketName,
            key: statement.storageKey,
            fileName: statement.filename
        });

        // Update the signed URL in the database
        await prisma.bankStatement.update({
            where: { id },
            data: { signedUrl }
        });

        return signedUrl;
    } catch (error) {
        throw new ApiError(
            httpStatus.INTERNAL_SERVER_ERROR,
            `Failed to generate signed URL: ${error instanceof Error ? error.message : 'Unknown error'}`
        );
    }
};

export default {
    getSupportedFormats,
    uploadStatement,
    getStatementById,
    getUserStatements,
    validateFileFormat,
    updateStatementStatus,
    generateSignedUrl
};
