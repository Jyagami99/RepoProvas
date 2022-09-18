import { Router } from "express";
import ensureAuthenticatedMiddleware from "../middlewares/ensureAuthenticatedMiddleware";

const router = Router();

router.use(ensureAuthenticatedMiddleware);
router.get("/tests");
router.post("/tests");
router.post("/tests/:id/view");

export default router;
