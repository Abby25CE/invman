import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashbordControllers";

const router = Router();

router.get("/", getDashboardMetrics);

export default router;
