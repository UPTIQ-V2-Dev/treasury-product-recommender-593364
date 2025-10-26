import { statementController } from '../../controllers/index.ts';
import { upload } from '../../controllers/statement.controller.ts';
import auth from '../../middlewares/auth.ts';
import validate from '../../middlewares/validate.ts';
import { statementValidation } from '../../validations/index.ts';
import express from 'express';

const router = express.Router();

// Authenticated routes
router
    .route('/formats')
    .get(
        auth('getStatementFormats'),
        validate(statementValidation.getFormats),
        statementController.getSupportedFormats
    );

router
    .route('/upload')
    .post(
        auth('uploadStatement'),
        upload,
        validate(statementValidation.uploadStatement),
        statementController.uploadStatement
    );

router
    .route('/:id')
    .get(auth('uploadStatement'), validate(statementValidation.getStatement), statementController.getStatement);

router
    .route('/:id/signed-url')
    .post(
        auth('uploadStatement'),
        validate(statementValidation.generateSignedUrl),
        statementController.generateSignedUrl
    );

router
    .route('/')
    .get(
        auth('uploadStatement'),
        validate(statementValidation.getUserStatements),
        statementController.getUserStatements
    );

export default router;

/**
 * @swagger
 * tags:
 *   name: Statements
 *   description: Bank statement upload and format management
 */

/**
 * @swagger
 * /statements/formats:
 *   get:
 *     summary: Get supported file formats
 *     description: Retrieve a list of supported file formats for bank statement uploads.
 *     tags: [Statements]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   extension:
 *                     type: string
 *                     example: ".pdf"
 *                   mimeType:
 *                     type: string
 *                     example: "application/pdf"
 *                   description:
 *                     type: string
 *                     example: "PDF Bank Statements"
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */

/**
 * @swagger
 * /statements/upload:
 *   post:
 *     summary: Upload bank statement file
 *     description: Upload a bank statement file for processing and analysis.
 *     tags: [Statements]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - file
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Bank statement file (PDF, CSV, or Excel)
 *               bankName:
 *                 type: string
 *                 description: Name of the bank (optional)
 *               accountType:
 *                 type: string
 *                 description: Type of account (optional)
 *               statementPeriod:
 *                 type: object
 *                 properties:
 *                   startDate:
 *                     type: string
 *                     format: date
 *                   endDate:
 *                     type: string
 *                     format: date
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "stmt-123"
 *                 filename:
 *                   type: string
 *                   example: "bank-statement.pdf"
 *                 uploadedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-10-26T10:00:00Z"
 *                 fileSize:
 *                   type: integer
 *                   example: 1024000
 *                 bankName:
 *                   type: string
 *                   example: "Chase Bank"
 *                 accountType:
 *                   type: string
 *                   example: "Business Checking"
 *                 statementPeriod:
 *                   type: object
 *                   properties:
 *                     startDate:
 *                       type: string
 *                       format: date
 *                       example: "2024-03-01"
 *                     endDate:
 *                       type: string
 *                       format: date
 *                       example: "2024-03-31"
 *                 processingStatus:
 *                   type: string
 *                   example: "UPLOADED"
 *                 cloudStorageUrl:
 *                   type: string
 *                   example: "GoogleCloudStorage://bucket/path/to/file"
 *                 signedUrl:
 *                   type: string
 *                   example: "https://storage.googleapis.com/signed-url"
 *                 storageProvider:
 *                   type: string
 *                   example: "GoogleCloudStorage"
 *                 storageKey:
 *                   type: string
 *                   example: "bank-statements/stmt123/file.pdf"
 *       "400":
 *         description: Bad request - Invalid file format or missing file
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "413":
 *         description: File too large
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */

/**
 * @swagger
 * /statements/{id}:
 *   get:
 *     summary: Get bank statement by ID
 *     description: Retrieve a specific bank statement by its ID.
 *     tags: [Statements]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Bank statement ID
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
 *                 filename:
 *                   type: string
 *                 uploadedAt:
 *                   type: string
 *                   format: date-time
 *                 fileSize:
 *                   type: integer
 *                 bankName:
 *                   type: string
 *                 accountType:
 *                   type: string
 *                 statementPeriod:
 *                   type: object
 *                 processingStatus:
 *                   type: string
 *                 cloudStorageUrl:
 *                   type: string
 *                   example: "GoogleCloudStorage://bucket/path/to/file"
 *                 signedUrl:
 *                   type: string
 *                   example: "https://storage.googleapis.com/signed-url"
 *                 storageProvider:
 *                   type: string
 *                   example: "GoogleCloudStorage"
 *                 storageKey:
 *                   type: string
 *                   example: "bank-statements/stmt123/file.pdf"
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */

/**
 * @swagger
 * /statements/{id}/signed-url:
 *   post:
 *     summary: Generate fresh signed URL for bank statement
 *     description: Generate a new signed URL for downloading a bank statement file from cloud storage.
 *     tags: [Statements]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Bank statement ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 signedUrl:
 *                   type: string
 *                   example: "https://storage.googleapis.com/signed-url"
 *       "400":
 *         description: Statement not uploaded to cloud storage
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */

/**
 * @swagger
 * /statements:
 *   get:
 *     summary: Get user's bank statements
 *     description: Retrieve all bank statements for the authenticated user with pagination.
 *     tags: [Statements]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *         description: Maximum number of statements to return
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Page number
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [uploadedAt, filename, processingStatus]
 *         description: Field to sort by
 *       - in: query
 *         name: sortType
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort order
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   filename:
 *                     type: string
 *                   uploadedAt:
 *                     type: string
 *                     format: date-time
 *                   fileSize:
 *                     type: integer
 *                   bankName:
 *                     type: string
 *                   accountType:
 *                     type: string
 *                   statementPeriod:
 *                     type: object
 *                   processingStatus:
 *                     type: string
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "500":
 *         $ref: '#/components/responses/InternalError'
 */
