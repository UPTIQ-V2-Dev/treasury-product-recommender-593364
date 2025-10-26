import { analysisController } from '../../controllers/index.ts';
import auth from '../../middlewares/auth.ts';
import validate from '../../middlewares/validate.ts';
import { analysisValidation } from '../../validations/index.ts';
import express from 'express';

const router = express.Router();

// Authenticated routes
router
    .route('/:analysisId/status')
    .get(auth('getAnalysis'), validate(analysisValidation.getAnalysisStatus), analysisController.getAnalysisStatus);

router
    .route('/:analysisId')
    .get(auth('getAnalysis'), validate(analysisValidation.getAnalysisResults), analysisController.getAnalysisResults);

router
    .route('/:analysisId/retry')
    .post(auth('manageAnalysis'), validate(analysisValidation.retryAnalysis), analysisController.retryAnalysis);

export default router;

/**
 * @swagger
 * tags:
 *   name: Analysis
 *   description: Bank statement analysis management
 */

/**
 * @swagger
 * /analysis/{analysisId}/status:
 *   get:
 *     summary: Get analysis processing status
 *     description: Get current status of statement analysis processing
 *     tags: [Analysis]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: analysisId
 *         required: true
 *         schema:
 *           type: string
 *         description: Analysis ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "analysis-123"
 *                 status:
 *                   type: string
 *                   enum: [PENDING, PROCESSING, COMPLETED, FAILED]
 *                   example: "PROCESSING"
 *                 progress:
 *                   type: integer
 *                   minimum: 0
 *                   maximum: 100
 *                   example: 75
 *                 currentStep:
 *                   type: string
 *                   nullable: true
 *                   example: "Generating recommendations"
 *                 error:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /analysis/{analysisId}:
 *   get:
 *     summary: Get complete analysis results
 *     description: Get complete analysis results with financial insights and recommendations
 *     tags: [Analysis]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: analysisId
 *         required: true
 *         schema:
 *           type: string
 *         description: Analysis ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "analysis-123"
 *                 statementId:
 *                   type: string
 *                   example: "stmt-123"
 *                 analysisDate:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-10-26T10:00:00Z"
 *                 financialInsights:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       type:
 *                         type: string
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       value:
 *                         type: string
 *                       trend:
 *                         type: string
 *                       impact:
 *                         type: string
 *                   example:
 *                     - id: "insight-1"
 *                       type: "CASH_FLOW"
 *                       title: "Strong Monthly Cash Flow"
 *                       description: "Consistent positive cash flow"
 *                       value: "$15,000"
 *                       trend: "UP"
 *                       impact: "POSITIVE"
 *                 recommendations:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       productId:
 *                         type: string
 *                       score:
 *                         type: integer
 *                       reasoning:
 *                         type: string
 *                       recommendedAmount:
 *                         type: number
 *                   example:
 *                     - id: "rec-1"
 *                       productId: "prod-1"
 *                       score: 92
 *                       reasoning: "Optimal liquidity management"
 *                       recommendedAmount: 100000
 *                 riskProfile:
 *                   type: string
 *                   enum: [LOW, MEDIUM, HIGH]
 *                   example: "LOW"
 *                 liquidityCoverage:
 *                   type: number
 *                   format: float
 *                   example: 85
 *                 averageBalance:
 *                   type: number
 *                   format: float
 *                   example: 125000
 *                 cashFlowVolatility:
 *                   type: number
 *                   format: float
 *                   example: 15
 *       "400":
 *         description: Bad Request - Analysis not completed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Analysis not completed"
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /analysis/{analysisId}/retry:
 *   post:
 *     summary: Retry failed analysis
 *     description: Retry failed analysis processing for a statement
 *     tags: [Analysis]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: analysisId
 *         required: true
 *         schema:
 *           type: string
 *         description: Analysis ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "analysis-123"
 *                 status:
 *                   type: string
 *                   enum: [PROCESSING]
 *                   example: "PROCESSING"
 *                 progress:
 *                   type: integer
 *                   example: 0
 *                 currentStep:
 *                   type: string
 *                   example: "Initializing analysis"
 *       "400":
 *         description: Bad Request - Analysis not in failed state
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Analysis not in failed state"
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
