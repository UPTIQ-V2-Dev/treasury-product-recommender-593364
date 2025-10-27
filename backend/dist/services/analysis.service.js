import prisma from "../client.js";
import { AnalysisStatus } from '../generated/prisma/index.js';
import ApiError from "../utils/ApiError.js";
import httpStatus from 'http-status';
/**
 * Get analysis by id
 * @param {string} analysisId
 * @param {number} userId - user id to check ownership
 * @returns {Promise<AnalysisResult | null>}
 */
const getAnalysisById = async (analysisId, userId) => {
    const analysis = await prisma.analysisResult.findUnique({
        where: { id: analysisId },
        include: {
            statement: true,
            user: {
                select: {
                    id: true,
                    email: true,
                    name: true
                }
            }
        }
    });
    if (!analysis) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Analysis not found');
    }
    // Check if user owns this analysis
    if (analysis.userId !== userId) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Access denied');
    }
    return analysis;
};
/**
 * Get analysis status by id
 * @param {string} analysisId
 * @param {number} userId - user id to check ownership
 * @returns {Promise<{id: string, status: AnalysisStatus, progress: number, currentStep: string | null, error: string | null}>}
 */
const getAnalysisStatus = async (analysisId, userId) => {
    const analysis = await prisma.analysisResult.findUnique({
        where: { id: analysisId },
        select: {
            id: true,
            status: true,
            progress: true,
            currentStep: true,
            error: true,
            userId: true
        }
    });
    if (!analysis) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Analysis not found');
    }
    // Check if user owns this analysis
    if (analysis.userId !== userId) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Access denied');
    }
    return {
        id: analysis.id,
        status: analysis.status,
        progress: analysis.progress,
        currentStep: analysis.currentStep,
        error: analysis.error
    };
};
/**
 * Get complete analysis results by id
 * @param {string} analysisId
 * @param {number} userId - user id to check ownership
 * @returns {Promise<AnalysisResult>}
 */
const getAnalysisResults = async (analysisId, userId) => {
    const analysis = await getAnalysisById(analysisId, userId);
    if (!analysis) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Analysis not found');
    }
    // Check if analysis is completed
    if (analysis.status !== AnalysisStatus.COMPLETED) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Analysis not completed');
    }
    return analysis;
};
/**
 * Retry failed analysis processing
 * @param {string} analysisId
 * @param {number} userId - user id to check ownership
 * @returns {Promise<{id: string, status: AnalysisStatus, progress: number, currentStep: string}>}
 */
const retryAnalysis = async (analysisId, userId) => {
    const analysis = await prisma.analysisResult.findUnique({
        where: { id: analysisId },
        select: {
            id: true,
            status: true,
            userId: true
        }
    });
    if (!analysis) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Analysis not found');
    }
    // Check if user owns this analysis
    if (analysis.userId !== userId) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Access denied');
    }
    // Check if analysis is in failed state
    if (analysis.status !== AnalysisStatus.FAILED) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Analysis not in failed state');
    }
    // Reset analysis to processing state
    const updatedAnalysis = await prisma.analysisResult.update({
        where: { id: analysisId },
        data: {
            status: AnalysisStatus.PROCESSING,
            progress: 0,
            currentStep: 'Initializing analysis',
            error: null
        },
        select: {
            id: true,
            status: true,
            progress: true,
            currentStep: true
        }
    });
    // Here you would trigger the actual analysis processing
    // This is just a placeholder - in a real implementation you would:
    // - Queue the analysis for processing
    // - Trigger background job
    // - Call external analysis service
    // For now, we just return the reset state
    return {
        id: updatedAnalysis.id,
        status: updatedAnalysis.status,
        progress: updatedAnalysis.progress,
        currentStep: updatedAnalysis.currentStep || 'Initializing analysis'
    };
};
/**
 * Create a new analysis
 * @param {string} statementId
 * @param {number} userId
 * @returns {Promise<AnalysisResult>}
 */
const createAnalysis = async (statementId, userId) => {
    // Check if statement exists and belongs to user
    const statement = await prisma.bankStatement.findUnique({
        where: { id: statementId },
        select: { id: true, userId: true }
    });
    if (!statement) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Bank statement not found');
    }
    if (statement.userId !== userId) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Access denied');
    }
    // Create new analysis
    const analysis = await prisma.analysisResult.create({
        data: {
            statementId,
            userId,
            status: AnalysisStatus.PENDING,
            progress: 0,
            currentStep: 'Queued for processing'
        }
    });
    return analysis;
};
/**
 * Query analysis results for a user
 * @param {number} userId - user id to filter by
 * @param {Object} filter - Prisma filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryAnalysisHistory = async (userId, filter, options) => {
    const page = options.page ?? 1;
    const limit = options.limit ?? 10;
    const sortBy = options.sortBy ?? 'analysisDate';
    const sortType = options.sortType ?? 'desc';
    // Build where clause
    const where = {
        userId: userId
    };
    if (filter.status) {
        where.status = filter.status;
    }
    if (filter.dateFrom || filter.dateTo) {
        where.analysisDate = {};
        if (filter.dateFrom) {
            where.analysisDate.gte = filter.dateFrom;
        }
        if (filter.dateTo) {
            where.analysisDate.lte = filter.dateTo;
        }
    }
    const [analyses, totalResults] = await Promise.all([
        prisma.analysisResult.findMany({
            where,
            select: {
                id: true,
                statementId: true,
                analysisDate: true,
                status: true,
                riskProfile: true,
                averageBalance: true,
                liquidityCoverage: true,
                cashFlowVolatility: true,
                progress: true,
                currentStep: true,
                error: true
            },
            skip: (page - 1) * limit,
            take: limit,
            orderBy: { [sortBy]: sortType }
        }),
        prisma.analysisResult.count({ where })
    ]);
    const totalPages = Math.ceil(totalResults / limit);
    return {
        results: analyses.map(analysis => ({
            ...analysis,
            analysisDate: analysis.analysisDate.toISOString()
        })),
        page,
        limit,
        totalPages,
        totalResults
    };
};
/**
 * Update analysis status and progress
 * @param {string} analysisId
 * @param {Object} updateData
 * @returns {Promise<AnalysisResult>}
 */
const updateAnalysisStatus = async (analysisId, updateData) => {
    const analysis = await prisma.analysisResult.findUnique({
        where: { id: analysisId }
    });
    if (!analysis) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Analysis not found');
    }
    const updatedAnalysis = await prisma.analysisResult.update({
        where: { id: analysisId },
        data: updateData
    });
    return updatedAnalysis;
};
export default {
    getAnalysisById,
    getAnalysisStatus,
    getAnalysisResults,
    queryAnalysisHistory,
    retryAnalysis,
    createAnalysis,
    updateAnalysisStatus
};
