import { recommendationController } from "../../controllers/index.js";
import auth from "../../middlewares/auth.js";
import validate from "../../middlewares/validate.js";
import { recommendationValidation } from "../../validations/index.js";
import express from 'express';
const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Recommendations
 *   description: Treasury product recommendation management
 */
/**
 * @swagger
 * /recommendations/{recommendationId}/contact:
 *   post:
 *     summary: Submit contact request for treasury product recommendation
 *     description: Submit a contact request for a specific treasury product recommendation. The recommendation must belong to the authenticated user's analysis results.
 *     tags: [Recommendations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: recommendationId
 *         required: true
 *         schema:
 *           type: string
 *         description: The recommendation ID from analysis results
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - preferredContact
 *             properties:
 *               message:
 *                 type: string
 *                 description: Optional message from user
 *                 example: "Interested in this product for my business needs"
 *               preferredContact:
 *                 type: string
 *                 enum: [EMAIL, PHONE, IN_PERSON]
 *                 description: Preferred contact method
 *                 example: "EMAIL"
 *     responses:
 *       "200":
 *         description: Contact request submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Your request has been submitted. A representative will contact you within 24 hours."
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "500":
 *         $ref: '#/components/responses/InternalServerError'
 */
router
    .route('/:recommendationId/contact')
    .post(auth('manageRecommendations'), validate(recommendationValidation.submitContactRequest), recommendationController.submitContactRequest);
export default router;
