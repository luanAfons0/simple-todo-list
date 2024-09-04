import express from "express";
import taskRoutes from "./task-routes.js";
import healthCheckRoute from "./health-check-route.js";

const router = express.Router();

router.use(taskRoutes);
router.use(healthCheckRoute);

export default router;
