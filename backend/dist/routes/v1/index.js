import config from "../../config/config.js";
import analysisRoute from "./analysis.route.js";
import authRoute from "./auth.route.js";
import docsRoute from "./docs.route.js";
import mcpRoute from "./mcp.route.js";
import recommendationRoute from "./recommendation.route.js";
import statementRoute from "./statement.route.js";
import treasuryProductRoute from "./treasuryProduct.route.js";
import userRoute from "./user.route.js";
import express from 'express';
const router = express.Router();
const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute
    },
    {
        path: '/users',
        route: userRoute
    },
    {
        path: '/statements',
        route: statementRoute
    },
    {
        path: '/analysis',
        route: analysisRoute
    },
    {
        path: '/products',
        route: treasuryProductRoute
    },
    {
        path: '/recommendations',
        route: recommendationRoute
    },
    {
        path: '/mcp',
        route: mcpRoute
    }
];
const devRoutes = [
    // routes available only in development mode
    {
        path: '/docs',
        route: docsRoute
    }
];
defaultRoutes.forEach(route => {
    router.use(route.path, route.route);
});
/* istanbul ignore next */
if (config.env === 'development') {
    devRoutes.forEach(route => {
        router.use(route.path, route.route);
    });
}
export default router;
