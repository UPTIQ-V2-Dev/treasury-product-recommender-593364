import prisma from '../client.ts';
import { Prisma, TreasuryProduct } from '../generated/prisma/index.js';

/**
 * Query for treasury products
 * @param {Object} filter - Prisma filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<{results: TreasuryProduct[], page: number, limit: number, totalPages: number, totalResults: number}>}
 */
const queryTreasuryProducts = async (
    filter: {
        category?: string;
        riskLevel?: string;
        minInvestment?: number;
    },
    options: {
        limit?: number;
        page?: number;
        sortBy?: string;
        sortType?: 'asc' | 'desc';
    }
): Promise<{ results: TreasuryProduct[]; page: number; limit: number; totalPages: number; totalResults: number }> => {
    const page = options.page ?? 1;
    const limit = options.limit ?? 10;
    const sortBy = options.sortBy;
    const sortType = options.sortType ?? 'desc';

    // Build where clause based on filter
    const where: Prisma.TreasuryProductWhereInput = {};

    if (filter.category) {
        where.category = {
            equals: filter.category,
            mode: 'insensitive'
        };
    }

    if (filter.riskLevel) {
        where.riskLevel = {
            equals: filter.riskLevel,
            mode: 'insensitive'
        };
    }

    if (filter.minInvestment !== undefined) {
        where.minInvestment = {
            gte: filter.minInvestment
        };
    }

    // Get total count for pagination
    const totalResults = await prisma.treasuryProduct.count({ where });
    const totalPages = Math.ceil(totalResults / limit);

    // Get paginated results
    const results = await prisma.treasuryProduct.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: sortBy ? { [sortBy]: sortType } : { createdAt: 'desc' }
    });

    return {
        results,
        page,
        limit,
        totalPages,
        totalResults
    };
};

/**
 * Get treasury product by id
 * @param {string} id
 * @returns {Promise<TreasuryProduct | null>}
 */
const getTreasuryProductById = async (id: string): Promise<TreasuryProduct | null> => {
    return await prisma.treasuryProduct.findUnique({
        where: { id }
    });
};

export default {
    queryTreasuryProducts,
    getTreasuryProductById
};
