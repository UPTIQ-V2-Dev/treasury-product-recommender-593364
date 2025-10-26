import Joi from 'joi';

const submitContactRequest = {
    params: Joi.object().keys({
        recommendationId: Joi.string().required()
    }),
    body: Joi.object().keys({
        message: Joi.string().optional().allow(''),
        preferredContact: Joi.string().required().valid('EMAIL', 'PHONE', 'IN_PERSON')
    })
};

export default {
    submitContactRequest
};
