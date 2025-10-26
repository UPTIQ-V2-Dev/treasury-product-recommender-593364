import { statementService } from "../services/index.js";
import ApiError from "../utils/ApiError.js";
import catchAsyncWithAuth from "../utils/catchAsyncWithAuth.js";
import pick from "../utils/pick.js";
import httpStatus from 'http-status';
import multer from 'multer';
import path from 'path';
// Configure multer for file uploads
const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
    // Accept only specific file types
    const allowedTypes = [
        'application/pdf',
        'text/csv',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel'
    ];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(new ApiError(httpStatus.BAD_REQUEST, 'Invalid file format. Only PDF, CSV, and Excel files are allowed.'));
    }
};
export const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB limit
    }
}).single('file');
const getSupportedFormats = catchAsyncWithAuth(async (req, res) => {
    const formats = await statementService.getSupportedFormats();
    res.send(formats);
});
const uploadStatement = catchAsyncWithAuth(async (req, res) => {
    if (!req.file) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'No file uploaded');
    }
    const file = req.file;
    const userId = req.user.id;
    const extension = path.extname(file.originalname).toLowerCase();
    // Validate file format against database
    const isValidFormat = await statementService.validateFileFormat(file.mimetype, extension);
    if (!isValidFormat) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Unsupported file format');
    }
    // Extract additional data from request body if provided
    const additionalData = pick(req.body, ['bankName', 'accountType', 'statementPeriod']);
    // For demo purposes, we'll simulate some bank statement processing
    // In a real application, this would involve actual file parsing
    const mockProcessedData = {
        bankName: additionalData.bankName || 'Demo Bank',
        accountType: additionalData.accountType || 'Business Checking',
        statementPeriod: additionalData.statementPeriod || {
            startDate: '2024-01-01',
            endDate: '2024-01-31'
        }
    };
    const statement = await statementService.uploadStatement({
        filename: file.originalname,
        fileSize: file.size,
        ...mockProcessedData
    }, file.buffer, userId);
    res.status(httpStatus.CREATED).send({
        id: statement.id,
        filename: statement.filename,
        uploadedAt: statement.uploadedAt,
        fileSize: statement.fileSize,
        bankName: statement.bankName,
        accountType: statement.accountType,
        statementPeriod: statement.statementPeriod,
        processingStatus: statement.processingStatus,
        cloudStorageUrl: statement.cloudStorageUrl,
        signedUrl: statement.signedUrl,
        storageProvider: statement.storageProvider,
        storageKey: statement.storageKey
    });
});
const getStatement = catchAsyncWithAuth(async (req, res) => {
    const statement = await statementService.getStatementById(req.params.id, req.user.id);
    if (!statement) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Bank statement not found');
    }
    res.send(statement);
});
const getUserStatements = catchAsyncWithAuth(async (req, res) => {
    const options = pick(req.validatedQuery, ['limit', 'page', 'sortBy', 'sortType']);
    const statements = await statementService.getUserStatements(req.user.id, options);
    res.send(statements);
});
const generateSignedUrl = catchAsyncWithAuth(async (req, res) => {
    // Check if the statement belongs to the user
    const statement = await statementService.getStatementById(req.params.id, req.user.id);
    if (!statement) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Bank statement not found');
    }
    const signedUrl = await statementService.generateSignedUrl(req.params.id);
    res.send({ signedUrl });
});
export default {
    getSupportedFormats,
    uploadStatement,
    getStatement,
    getUserStatements,
    generateSignedUrl
};
