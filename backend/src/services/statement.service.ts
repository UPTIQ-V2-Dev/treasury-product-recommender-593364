import prisma from '../client.ts';
import { BankStatement, SupportedFormat } from '../generated/prisma/index.js';
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
    userId: number
): Promise<BankStatement> => {
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

    return statement;
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

export default {
    getSupportedFormats,
    uploadStatement,
    getStatementById,
    getUserStatements,
    validateFileFormat,
    updateStatementStatus
};
