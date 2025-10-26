import Joi from 'joi';
const getFormats = {
// No validation needed for GET /statements/formats
};
const uploadStatement = {
    // File validation is handled by multer middleware
    // Additional body validation can be added here if needed
    body: Joi.object()
        .keys({
        bankName: Joi.string().optional(),
        accountType: Joi.string().optional(),
        statementPeriod: Joi.object()
            .keys({
            startDate: Joi.string().isoDate().optional(),
            endDate: Joi.string().isoDate().optional()
        })
            .optional()
    })
        .optional()
};
const getStatement = {
    params: Joi.object().keys({
        id: Joi.string().required()
    })
};
const getUserStatements = {
    query: Joi.object().keys({
        limit: Joi.number().integer().min(1).max(100).optional(),
        page: Joi.number().integer().min(1).optional(),
        sortBy: Joi.string().valid('uploadedAt', 'filename', 'processingStatus').optional(),
        sortType: Joi.string().valid('asc', 'desc').optional()
    })
};
const generateSignedUrl = {
    params: Joi.object().keys({
        id: Joi.string().required()
    })
};
export default {
    getFormats,
    uploadStatement,
    getStatement,
    getUserStatements,
    generateSignedUrl
};
