import { Router } from "express";
import ensureAuthenticatedMiddleware from "../middlewares/ensureAuthenticatedMiddleware";

const router = Router();

router.get("/disciplines/:term", ensureAuthenticatedMiddleware);

export default router;
