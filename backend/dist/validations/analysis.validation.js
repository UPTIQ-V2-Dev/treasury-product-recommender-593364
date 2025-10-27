import Joi from 'joi';
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
    getAnalysisStatus,
    getAnalysisResults,
    retryAnalysis
};
