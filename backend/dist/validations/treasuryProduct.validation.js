import Joi from 'joi';
const getProducts = {
    query: Joi.object().keys({
        category: Joi.string(),
        riskLevel: Joi.string(),
        minInvestment: Joi.number().min(0),
        sortBy: Joi.string(),
        limit: Joi.number().integer().min(1),
        page: Joi.number().integer().min(1)
    })
};
const getProduct = {
    params: Joi.object().keys({
        productId: Joi.string().required()
    })
};
export default {
    getProducts,
    getProduct
};
