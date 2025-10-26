import { treasuryProductService } from '../services/index.ts';
import ApiError from '../utils/ApiError.ts';
import catchAsyncWithAuth from '../utils/catchAsyncWithAuth.ts';
import pick from '../utils/pick.ts';
import httpStatus from 'http-status';

const getProducts = catchAsyncWithAuth(async (req, res) => {
    const filter = pick(req.validatedQuery, ['category', 'riskLevel', 'minInvestment']);
    const options = pick(req.validatedQuery, ['sortBy', 'limit', 'page']);
    const result = await treasuryProductService.queryTreasuryProducts(filter, options);
    res.send(result);
});

const getProduct = catchAsyncWithAuth(async (req, res) => {
    const product = await treasuryProductService.getTreasuryProductById(req.params.productId);
    if (!product) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
    }
    res.send(product);
});

export default {
    getProducts,
    getProduct
};
