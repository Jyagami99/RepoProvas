import { Router } from "express";
import ensureAuthenticatedMiddleware from "../middlewares/ensureAuthenticatedMiddleware";

const router = Router();

router.get("/categories", ensureAuthenticatedMiddleware);

export default router;
