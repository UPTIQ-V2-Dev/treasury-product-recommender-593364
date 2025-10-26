import { recommendationService } from "../services/index.js";
import catchAsyncWithAuth from "../utils/catchAsyncWithAuth.js";
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
