import { Router } from "express";
import categoryController from "../controllers/categoryController";
import ensureAuthenticated from "../middlewares/ensureAuthenticatedMiddleware";

const router = Router();

router.get(
  "/categories",
  ensureAuthenticated,
  categoryController.findMany
);

export default router;
