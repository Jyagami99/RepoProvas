import { Router } from "express";

const disciplineRouter = Router();

disciplineRouter.get("/disciplines/:term");

export default disciplineRouter;
