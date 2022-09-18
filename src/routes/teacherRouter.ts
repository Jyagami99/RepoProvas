import { Router } from "express";

const teacherRouter = Router();

teacherRouter.get("/teachers/:discipline");

export default teacherRouter;
