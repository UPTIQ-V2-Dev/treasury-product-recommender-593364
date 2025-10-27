import { AnalysisStatus } from '../generated/prisma/index.js';
import Joi from 'joi';
const getAnalysisHistory = {
    query: Joi.object().keys({
        status: Joi.string().valid(...Object.values(AnalysisStatus)),
        dateFrom: Joi.date().iso(),
        dateTo: Joi.date().iso(),
        sortBy: Joi.string().valid('analysisDate', 'status'),
        sortType: Joi.string().valid('asc', 'desc'),
        limit: Joi.number().integer().min(1).max(100),
        page: Joi.number().integer().min(1)
    })
};
const getAnalysisStatus = {
    params: Joi.object().keys({
        analysisId: Joi.string().required()
    })
};
const getAnalysisResults = {
    params: Joi.object().keys({
        analysisId: Joi.string().required()
    })
};
const retryAnalysis = {
    params: Joi.object().keys({
        analysisId: Joi.string().required()
    })
};
export default {
    getAnalysisHistory,
    getAnalysisStatus,
    getAnalysisResults,
    retryAnalysis
};
