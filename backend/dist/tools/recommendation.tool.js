import { recommendationService } from "../services/index.js";
import { z } from 'zod';
const contactRequestSchema = z.object({
    success: z.boolean(),
    message: z.string()
});
const submitContactRequestTool = {
    id: 'recommendation_submit_contact_request',
    name: 'Submit Contact Request for Recommendation',
    description: 'Submit contact request for treasury product recommendation',
    inputSchema: z.object({
        recommendationId: z.string().min(1),
        userId: z.number().int(),
        message: z.string().optional(),
        preferredContact: z.enum(['EMAIL', 'PHONE', 'IN_PERSON'])
    }),
    outputSchema: contactRequestSchema,
    fn: async (inputs) => {
        const result = await recommendationService.submitContactRequest(inputs.recommendationId, inputs.userId, {
            message: inputs.message,
            preferredContact: inputs.preferredContact
        });
        return result;
    }
};
const validateRecommendationAccessTool = {
    id: 'recommendation_validate_access',
    name: 'Validate Recommendation Access',
    description: 'Validate that a recommendation exists and belongs to the user',
    inputSchema: z.object({
        recommendationId: z.string().min(1),
        userId: z.number().int()
    }),
    outputSchema: z.object({
        analysisId: z.string(),
        recommendation: z.any()
    }),
    fn: async (inputs) => {
        const result = await recommendationService.validateRecommendationAccess(inputs.recommendationId, inputs.userId);
        return result;
    }
};
export const recommendationTools = [submitContactRequestTool, validateRecommendationAccessTool];
