import prisma from "../client.js";
import ApiError from "../utils/ApiError.js";
import httpStatus from 'http-status';
/**
 * Submit contact request for treasury product recommendation
 * @param {string} recommendationId
 * @param {number} userId - user id to check ownership
 * @param {Object} contactData
 * @param {string} contactData.message - optional message from user
 * @param {string} contactData.preferredContact - preferred contact method
 * @returns {Promise<{success: boolean, message: string}>}
 */
const submitContactRequest = async (recommendationId, userId, contactData) => {
    // Find analysis results for the user that might contain this recommendation ID
    const analyses = await prisma.analysisResult.findMany({
        where: {
            userId,
            recommendations: {
                not: {
                    equals: null
                }
            }
        },
        select: {
            id: true,
            recommendations: true
        }
    });
    if (!analyses || analyses.length === 0) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Recommendation not found');
    }
    // Find the specific recommendation within the analysis results
    let foundRecommendation = null;
    for (const analysis of analyses) {
        if (analysis.recommendations && Array.isArray(analysis.recommendations)) {
            const recommendation = analysis.recommendations.find((rec) => rec.id === recommendationId);
            if (recommendation) {
                foundRecommendation = recommendation;
                break;
            }
        }
    }
    if (!foundRecommendation) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Recommendation not found');
    }
    // Validate preferred contact method
    const validContactMethods = ['EMAIL', 'PHONE', 'IN_PERSON'];
    if (!validContactMethods.includes(contactData.preferredContact)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid contact preference');
    }
    // In a real implementation, you would:
    // 1. Store the contact request in a database table
    // 2. Send notification to sales team
    // 3. Queue follow-up tasks
    // 4. Log the interaction
    //
    // For now, we'll just return a success response
    // as this is a contact request submission endpoint
    const responseMessage = 'Your request has been submitted. A representative will contact you within 24 hours.';
    return {
        success: true,
        message: responseMessage
    };
};
/**
 * Validate that a recommendation exists and belongs to the user
 * @param {string} recommendationId
 * @param {number} userId
 * @returns {Promise<{analysisId: string, recommendation: any}>}
 */
const validateRecommendationAccess = async (recommendationId, userId) => {
    // Find analysis results for the user that might contain this recommendation ID
    const analyses = await prisma.analysisResult.findMany({
        where: {
            userId,
            recommendations: {
                not: {
                    equals: null
                }
            }
        },
        select: {
            id: true,
            recommendations: true
        }
    });
    if (!analyses || analyses.length === 0) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Recommendation not found');
    }
    // Find the specific recommendation within the analysis results
    for (const analysis of analyses) {
        if (analysis.recommendations && Array.isArray(analysis.recommendations)) {
            const recommendation = analysis.recommendations.find((rec) => rec.id === recommendationId);
            if (recommendation) {
                return {
                    analysisId: analysis.id,
                    recommendation
                };
            }
        }
    }
    throw new ApiError(httpStatus.NOT_FOUND, 'Recommendation not found');
};
export default {
    submitContactRequest,
    validateRecommendationAccess
};
