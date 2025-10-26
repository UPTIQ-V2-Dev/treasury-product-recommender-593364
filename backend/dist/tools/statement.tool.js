import { statementService } from "../services/index.js";
import { z } from 'zod';
// Reusable schemas
const supportedFormatSchema = z.object({
    id: z.number(),
    extension: z.string(),
    mimeType: z.string(),
    description: z.string()
});
const bankStatementSchema = z.object({
    id: z.string(),
    filename: z.string(),
    uploadedAt: z.string(),
    fileSize: z.number(),
    bankName: z.string().nullable(),
    accountType: z.string().nullable(),
    statementPeriod: z.any(),
    processingStatus: z.string(),
    userId: z.number(),
    cloudStorageUrl: z.string().nullable(),
    signedUrl: z.string().nullable(),
    storageProvider: z.string().nullable(),
    storageKey: z.string().nullable()
});
const getSupportedFormatsTool = {
    id: 'statement_get_supported_formats',
    name: 'Get Supported File Formats',
    description: 'Get list of supported file formats for bank statement uploads',
    inputSchema: z.object({}),
    outputSchema: z.object({
        formats: z.array(supportedFormatSchema)
    }),
    fn: async () => {
        const formats = await statementService.getSupportedFormats();
        return { formats };
    }
};
const getStatementByIdTool = {
    id: 'statement_get_by_id',
    name: 'Get Bank Statement By ID',
    description: 'Get a specific bank statement by its ID',
    inputSchema: z.object({
        id: z.string(),
        userId: z.number().optional()
    }),
    outputSchema: bankStatementSchema,
    fn: async (inputs) => {
        const statement = await statementService.getStatementById(inputs.id, inputs.userId);
        if (!statement) {
            throw new Error('Bank statement not found');
        }
        return statement;
    }
};
const getUserStatementsTool = {
    id: 'statement_get_user_statements',
    name: 'Get User Bank Statements',
    description: 'Get all bank statements for a specific user with pagination',
    inputSchema: z.object({
        userId: z.number(),
        limit: z.number().int().min(1).max(100).optional(),
        page: z.number().int().min(1).optional(),
        sortBy: z.enum(['uploadedAt', 'filename', 'processingStatus']).optional(),
        sortType: z.enum(['asc', 'desc']).optional()
    }),
    outputSchema: z.object({
        statements: z.array(bankStatementSchema)
    }),
    fn: async (inputs) => {
        const { userId, ...options } = inputs;
        const statements = await statementService.getUserStatements(userId, options);
        return { statements };
    }
};
const validateFileFormatTool = {
    id: 'statement_validate_file_format',
    name: 'Validate File Format',
    description: 'Check if a file format is supported for bank statement uploads',
    inputSchema: z.object({
        mimeType: z.string(),
        extension: z.string()
    }),
    outputSchema: z.object({
        isValid: z.boolean(),
        message: z.string()
    }),
    fn: async (inputs) => {
        const isValid = await statementService.validateFileFormat(inputs.mimeType, inputs.extension);
        return {
            isValid,
            message: isValid ? 'File format is supported' : 'File format is not supported'
        };
    }
};
const updateStatementStatusTool = {
    id: 'statement_update_status',
    name: 'Update Statement Processing Status',
    description: 'Update the processing status of a bank statement',
    inputSchema: z.object({
        id: z.string(),
        status: z.string(),
        bankName: z.string().optional(),
        accountType: z.string().optional(),
        statementPeriod: z.any().optional()
    }),
    outputSchema: bankStatementSchema,
    fn: async (inputs) => {
        const { id, status, ...additionalData } = inputs;
        const statement = await statementService.updateStatementStatus(id, status, Object.keys(additionalData).length > 0 ? additionalData : undefined);
        return statement;
    }
};
const generateSignedUrlTool = {
    id: 'statement_generate_signed_url',
    name: 'Generate Fresh Signed URL',
    description: 'Generate a fresh signed URL for downloading a bank statement file from cloud storage',
    inputSchema: z.object({
        id: z.string()
    }),
    outputSchema: z.object({
        signedUrl: z.string()
    }),
    fn: async (inputs) => {
        const signedUrl = await statementService.generateSignedUrl(inputs.id);
        return { signedUrl };
    }
};
export const statementTools = [
    getSupportedFormatsTool,
    getStatementByIdTool,
    getUserStatementsTool,
    validateFileFormatTool,
    updateStatementStatusTool,
    generateSignedUrlTool
];
