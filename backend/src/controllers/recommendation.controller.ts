import { recommendationService } from '../services/index.ts';
import catchAsyncWithAuth from '../utils/catchAsyncWithAuth.ts';
import httpStatus from 'http-status';

const submitContactRequest = catchAsyncWithAuth(async (req, res) => {
    const { recommendationId } = req.params;
    const { message, preferredContact } = req.body;
    const userId = req.user.id;

    const result = await recommendationService.submitContactRequest(recommendationId, userId, {
        message,
        preferredContact
    });

    res.status(httpStatus.OK).send(result);
});

export default {
    submitContactRequest
};
