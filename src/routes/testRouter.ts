import { Router } from "express";
import testController from "../controllers/testController";
import ensureAuthenticated from "../middlewares/ensureAuthenticatedMiddleware";

const router = Router();

router.use(ensureAuthenticated);
router.get("/tests", testController.find);
router.post("/tests", testController.insert);
router.post("/tests/:id/view", testController.view);

export default router;
