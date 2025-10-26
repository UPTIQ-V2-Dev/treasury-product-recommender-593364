import { treasuryProductService } from "../services/index.js";
import pick from "../utils/pick.js";
import { z } from 'zod';
const treasuryProductSchema = z.object({
    id: z.string(),
    name: z.string(),
    category: z.string(),
    description: z.string(),
    minInvestment: z.number(),
    expectedReturn: z.number(),
    riskLevel: z.string(),
    tenure: z.string(),
    features: z.any(), // JSON field
    eligibility: z.any(), // JSON field
    documents: z.any(), // JSON field
    createdAt: z.string(),
    updatedAt: z.string()
});
const treasuryProductListResponseSchema = z.object({
    results: z.array(treasuryProductSchema),
    page: z.number(),
    limit: z.number(),
    totalPages: z.number(),
    totalResults: z.number()
});
const getProductsTool = {
    id: 'treasury_products_list',
    name: 'Get Treasury Products',
    description: 'Get list of available treasury products with filtering options',
    inputSchema: z.object({
        category: z.string().optional(),
        riskLevel: z.string().optional(),
        minInvestment: z.number().min(0).optional(),
        sortBy: z.string().optional(),
        limit: z.number().int().min(1).optional(),
        page: z.number().int().min(1).optional()
    }),
    outputSchema: treasuryProductListResponseSchema,
    fn: async (inputs) => {
        const filter = pick(inputs, ['category', 'riskLevel', 'minInvestment']);
        const options = pick(inputs, ['sortBy', 'limit', 'page']);
        const result = await treasuryProductService.queryTreasuryProducts(filter, options);
        return result;
    }
};
const getProductTool = {
    id: 'treasury_product_get_by_id',
    name: 'Get Treasury Product By ID',
    description: 'Get detailed information about a specific treasury product',
    inputSchema: z.object({
        productId: z.string()
    }),
    outputSchema: treasuryProductSchema,
    fn: async (inputs) => {
        const product = await treasuryProductService.getTreasuryProductById(inputs.productId);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    }
};
export const treasuryProductTools = [getProductsTool, getProductTool];
