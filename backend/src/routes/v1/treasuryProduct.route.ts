import { treasuryProductController } from '../../controllers/index.ts';
import auth from '../../middlewares/auth.ts';
import validate from '../../middlewares/validate.ts';
import { treasuryProductValidation } from '../../validations/index.ts';
import express from 'express';

const router = express.Router();

router
    .route('/')
    .get(auth('getProducts'), validate(treasuryProductValidation.getProducts), treasuryProductController.getProducts);

router
    .route('/:productId')
    .get(auth('getProducts'), validate(treasuryProductValidation.getProduct), treasuryProductController.getProduct);

export default router;

/**
 * @swagger
 * tags:
 *   name: Treasury Products
 *   description: Treasury product management and retrieval
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get list of available treasury products
 *     description: Authenticated users can retrieve treasury products with filtering options
 *     tags: [Treasury Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Product category filter
 *       - in: query
 *         name: riskLevel
 *         schema:
 *           type: string
 *         description: Risk level filter
 *       - in: query
 *         name: minInvestment
 *         schema:
 *           type: number
 *           minimum: 0
 *         description: Minimum investment amount filter
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Field to sort by
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of products
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/TreasuryProduct'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 5
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 */

/**
 * @swagger
 * /products/{productId}:
 *   get:
 *     summary: Get detailed information about a specific treasury product
 *     description: Authenticated users can retrieve detailed product information
 *     tags: [Treasury Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TreasuryProduct'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     TreasuryProduct:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         category:
 *           type: string
 *         description:
 *           type: string
 *         minInvestment:
 *           type: number
 *         expectedReturn:
 *           type: number
 *         riskLevel:
 *           type: string
 *         tenure:
 *           type: string
 *         features:
 *           type: array
 *           items:
 *             type: string
 *         eligibility:
 *           type: array
 *           items:
 *             type: string
 *         documents:
 *           type: array
 *           items:
 *             type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
