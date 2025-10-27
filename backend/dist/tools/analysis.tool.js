import { AnalysisStatus } from '../generated/prisma/index.js';
import { analysisService } from "../services/index.js";
import { z } from 'zod';
const analysisStatusSchema = z.object({
    id: z.string(),
    status: z.enum([
        AnalysisStatus.PENDING,
        AnalysisStatus.PROCESSING,
        AnalysisStatus.COMPLETED,
        AnalysisStatus.FAILED
    ]),
    progress: z.number(),
    currentStep: z.string().nullable(),
    error: z.string().nullable()
});
const analysisResultSchema = z.object({
    id: z.string(),
    statementId: z.string(),
    analysisDate: z.string(),
    financialInsights: z.any().nullable(),
    recommendations: z.any().nullable(),
    riskProfile: z.string().nullable(),
    liquidityCoverage: z.number().nullable(),
    averageBalance: z.number().nullable(),
    cashFlowVolatility: z.number().nullable()
});
const getAnalysisStatusTool = {
    id: 'analysis_get_status',
    name: 'Get Analysis Status',
    description: 'Get the current status of analysis processing',
    inputSchema: z.object({
        analysisId: z.string().min(1),
        userId: z.number().int()
    }),
    outputSchema: analysisStatusSchema,
    fn: async (inputs) => {
        const status = await analysisService.getAnalysisStatus(inputs.analysisId, inputs.userId);
        return status;
    }
};
const getAnalysisResultsTool = {
    id: 'analysis_get_results',
    name: 'Get Analysis Results',
    description: 'Get complete analysis results with financial insights and recommendations',
    inputSchema: z.object({
        analysisId: z.string().min(1),
        userId: z.number().int()
    }),
    outputSchema: analysisResultSchema,
    fn: async (inputs) => {
        const results = await analysisService.getAnalysisResults(inputs.analysisId, inputs.userId);
        return {
            id: results.id,
            statementId: results.statementId,
            analysisDate: results.analysisDate.toISOString(),
            financialInsights: results.financialInsights,
            recommendations: results.recommendations,
            riskProfile: results.riskProfile,
            liquidityCoverage: results.liquidityCoverage,
            averageBalance: results.averageBalance,
            cashFlowVolatility: results.cashFlowVolatility
        };
    }
};
const retryAnalysisTool = {
    id: 'analysis_retry',
    name: 'Retry Analysis',
    description: 'Retry failed analysis processing for a statement',
    inputSchema: z.object({
        analysisId: z.string().min(1),
        userId: z.number().int()
    }),
    outputSchema: z.object({
        id: z.string(),
        status: z.enum([AnalysisStatus.PROCESSING]),
        progress: z.number(),
        currentStep: z.string()
    }),
    fn: async (inputs) => {
        const result = await analysisService.retryAnalysis(inputs.analysisId, inputs.userId);
        return result;
    }
};
const createAnalysisTool = {
    id: 'analysis_create',
    name: 'Create Analysis',
    description: 'Create a new analysis for a bank statement',
    inputSchema: z.object({
        statementId: z.string().min(1),
        userId: z.number().int()
    }),
    outputSchema: z.object({
        id: z.string(),
        statementId: z.string(),
        userId: z.number(),
        status: z.enum([
            AnalysisStatus.PENDING,
            AnalysisStatus.PROCESSING,
            AnalysisStatus.COMPLETED,
            AnalysisStatus.FAILED
        ]),
        progress: z.number(),
        currentStep: z.string().nullable(),
        analysisDate: z.string()
    }),
    fn: async (inputs) => {
        const analysis = await analysisService.createAnalysis(inputs.statementId, inputs.userId);
        return {
            id: analysis.id,
            statementId: analysis.statementId,
            userId: analysis.userId,
            status: analysis.status,
            progress: analysis.progress,
            currentStep: analysis.currentStep,
            analysisDate: analysis.analysisDate.toISOString()
        };
    }
};
const analysisHistorySchema = z.object({
    results: z.array(z.object({
        id: z.string(),
        statementId: z.string(),
        analysisDate: z.string(),
        status: z.enum([
            AnalysisStatus.PENDING,
            AnalysisStatus.PROCESSING,
            AnalysisStatus.COMPLETED,
            AnalysisStatus.FAILED
        ]),
        riskProfile: z.string().nullable(),
        averageBalance: z.number().nullable(),
        liquidityCoverage: z.number().nullable(),
        cashFlowVolatility: z.number().nullable(),
        progress: z.number(),
        currentStep: z.string().nullable(),
        error: z.string().nullable()
    })),
    page: z.number(),
    limit: z.number(),
    totalPages: z.number(),
    totalResults: z.number()
});
const getAnalysisHistoryTool = {
    id: 'analysis_get_history',
    name: 'Get Analysis History',
    description: "Get paginated list of user's analysis history with filtering capabilities",
    inputSchema: z.object({
        userId: z.number().int(),
        status: z
            .enum([AnalysisStatus.PENDING, AnalysisStatus.PROCESSING, AnalysisStatus.COMPLETED, AnalysisStatus.FAILED])
            .optional(),
        dateFrom: z.string().datetime().optional(),
        dateTo: z.string().datetime().optional(),
        sortBy: z.enum(['analysisDate', 'status']).optional(),
        sortType: z.enum(['asc', 'desc']).optional(),
        limit: z.number().int().min(1).max(100).optional(),
        page: z.number().int().min(1).optional()
    }),
    outputSchema: analysisHistorySchema,
    fn: async (inputs) => {
        const filter = {};
        const options = {};
        // Extract filter params
        if (inputs.status)
            filter.status = inputs.status;
        if (inputs.dateFrom)
            filter.dateFrom = new Date(inputs.dateFrom);
        if (inputs.dateTo)
            filter.dateTo = new Date(inputs.dateTo);
        // Extract options
        if (inputs.sortBy)
            options.sortBy = inputs.sortBy;
        if (inputs.sortType)
            options.sortType = inputs.sortType;
        if (inputs.limit)
            options.limit = inputs.limit;
        if (inputs.page)
            options.page = inputs.page;
        const result = await analysisService.queryAnalysisHistory(inputs.userId, filter, options);
        return result;
    }
};
const updateAnalysisStatusTool = {
    id: 'analysis_update_status',
    name: 'Update Analysis Status',
    description: 'Update analysis status and progress (internal use)',
    inputSchema: z.object({
        analysisId: z.string().min(1),
        status: z
            .enum([AnalysisStatus.PENDING, AnalysisStatus.PROCESSING, AnalysisStatus.COMPLETED, AnalysisStatus.FAILED])
            .optional(),
        progress: z.number().int().min(0).max(100).optional(),
        currentStep: z.string().optional(),
        error: z.string().optional(),
        financialInsights: z.any().optional(),
        recommendations: z.any().optional(),
        riskProfile: z.string().optional(),
        liquidityCoverage: z.number().optional(),
        averageBalance: z.number().optional(),
        cashFlowVolatility: z.number().optional()
    }),
    outputSchema: z.object({
        id: z.string(),
        status: z.enum([
            AnalysisStatus.PENDING,
            AnalysisStatus.PROCESSING,
            AnalysisStatus.COMPLETED,
            AnalysisStatus.FAILED
        ]),
        progress: z.number(),
        currentStep: z.string().nullable(),
        error: z.string().nullable()
    }),
    fn: async (inputs) => {
        const { analysisId, ...updateData } = inputs;
        const analysis = await analysisService.updateAnalysisStatus(analysisId, updateData);
        return {
            id: analysis.id,
            status: analysis.status,
            progress: analysis.progress,
            currentStep: analysis.currentStep,
            error: analysis.error
        };
    }
};
export const analysisTools = [
    getAnalysisStatusTool,
    getAnalysisResultsTool,
    getAnalysisHistoryTool,
    retryAnalysisTool,
    createAnalysisTool,
    updateAnalysisStatusTool
];
