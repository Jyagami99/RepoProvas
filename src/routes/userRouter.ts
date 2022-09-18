import { Router } from "express";
import validateSchema from "../middlewares/validateSchemaMiddleware";
import { userSchema } from "../schemas/userSchema";

const router = Router();

router.post("/sign-up", validateSchema(userSchema));
router.post("/sign-in", validateSchema(userSchema));

export default router;
