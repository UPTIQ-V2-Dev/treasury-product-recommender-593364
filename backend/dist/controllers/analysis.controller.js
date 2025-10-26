import { analysisService } from "../services/index.js";
import catchAsyncWithAuth from "../utils/catchAsyncWithAuth.js";
import httpStatus from 'http-status';
const getAnalysisStatus = catchAsyncWithAuth(async (req, res) => {
    const { analysisId } = req.params;
    const userId = req.user.id;
    const status = await analysisService.getAnalysisStatus(analysisId, userId);
    res.status(httpStatus.OK).send(status);
});
const getAnalysisResults = catchAsyncWithAuth(async (req, res) => {
    const { analysisId } = req.params;
    const userId = req.user.id;
    const results = await analysisService.getAnalysisResults(analysisId, userId);
    res.status(httpStatus.OK).send({
        id: results.id,
        statementId: results.statementId,
        analysisDate: results.analysisDate.toISOString(),
        financialInsights: results.financialInsights,
        recommendations: results.recommendations,
        riskProfile: results.riskProfile,
        liquidityCoverage: results.liquidityCoverage,
        averageBalance: results.averageBalance,
        cashFlowVolatility: results.cashFlowVolatility
    });
});
const retryAnalysis = catchAsyncWithAuth(async (req, res) => {
    const { analysisId } = req.params;
    const userId = req.user.id;
    const result = await analysisService.retryAnalysis(analysisId, userId);
    res.status(httpStatus.OK).send(result);
});
export default {
    getAnalysisStatus,
    getAnalysisResults,
    retryAnalysis
};
