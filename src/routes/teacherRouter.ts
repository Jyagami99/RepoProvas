import { Router } from "express";
import teachersController from "../controllers/teachersController";
import ensureAuthenticated from "../middlewares/ensureAuthenticatedMiddleware";

const router = Router();

router.get(
  "/teachers/:discipline",
  ensureAuthenticated,
  teachersController.get
);

export default router;
