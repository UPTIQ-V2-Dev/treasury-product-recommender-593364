const allRoles = {
    USER: [
        'getStatementFormats',
        'uploadStatement',
        'getAnalysis',
        'manageAnalysis',
        'getProducts',
        'manageRecommendations'
    ],
    ADMIN: [
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
