import { Router } from "express";
import ensureAuthenticatedMiddleware from "../middlewares/ensureAuthenticatedMiddleware";

const router = Router();

router.get("/teachers/:discipline", ensureAuthenticatedMiddleware);

export default router;
