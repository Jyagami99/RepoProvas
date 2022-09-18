import { Router } from "express";
import disciplineController from "../controllers/disciplineController";
import ensureAuthenticated from "../middlewares/ensureAuthenticatedMiddleware";

const router = Router();

router.get(
  "/disciplines/:term",
  ensureAuthenticated,
  disciplineController.get
);

export default router;
