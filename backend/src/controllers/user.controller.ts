import { userService } from '../services/index.ts';
import ApiError from '../utils/ApiError.ts';
import catchAsyncWithAuth from '../utils/catchAsyncWithAuth.ts';
import pick from '../utils/pick.ts';
import httpStatus from 'http-status';

const createUser = catchAsyncWithAuth(async (req, res) => {
    const { email, password, name, role } = req.body;
    await userService.createUser(email, password, name, role);
    const user = await userService.getUserByEmail(email, [
        'id',
        'email',
        'name',
        'role',
        'isEmailVerified',
        'createdAt',
        'updatedAt'
    ]);
    res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsyncWithAuth(async (req, res) => {
    const filter = pick(req.validatedQuery, ['name', 'role']);
    const options = pick(req.validatedQuery, ['sortBy', 'limit', 'page']);
    const result = await userService.queryUsers(filter, options, [
        'id',
        'email',
        'name',
        'role',
        'isEmailVerified',
        'createdAt',
        'updatedAt'
    ]);
    res.send(result);
});

const getUser = catchAsyncWithAuth(async (req, res) => {
    const user = await userService.getUserById(Number(req.params.userId), [
        'id',
        'email',
        'name',
        'role',
        'isEmailVerified',
        'createdAt',
        'updatedAt'
    ]);
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    res.send(user);
});

const updateUser = catchAsyncWithAuth(async (req, res) => {
    const user = await userService.updateUserById(Number(req.params.userId), req.body, [
        'id',
        'email',
        'name',
        'role',
        'isEmailVerified',
        'createdAt',
        'updatedAt'
    ]);
    res.send(user);
});

const deleteUser = catchAsyncWithAuth(async (req, res) => {
    await userService.deleteUserById(Number(req.params.userId));
    res.status(httpStatus.NO_CONTENT).send();
});

export default {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
};
