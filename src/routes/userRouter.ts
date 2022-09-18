import { Router } from "express";
import userController from "../controllers/userController";
import validateSchema from "../middlewares/validateSchemaMiddleware";
import { userSchema } from "../schemas/userSchema";

const router = Router();

router.post("/sign-up", validateSchema(userSchema), userController.signUp);
router.post("/sign-in", validateSchema(userSchema), userController.signIn);

export default router;
