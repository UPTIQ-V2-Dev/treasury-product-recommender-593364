import { Role } from '../generated/prisma/index.js';
const allRoles = {
    [Role.USER]: [
        'getStatementFormats',
        'uploadStatement',
        'getAnalysis',
        'manageAnalysis',
        'getProducts',
        'manageRecommendations'
    ],
    [Role.ADMIN]: [
        'getUsers',
        'manageUsers',
        'getStatementFormats',
        'uploadStatement',
        'getAnalysis',
        'manageAnalysis',
        'getProducts',
        'manageRecommendations'
    ]
};
export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));
