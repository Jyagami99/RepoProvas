import { Router } from "express";

const testRouter = Router();

testRouter.get("/tests");
testRouter.post("/tests");
testRouter.post("/tests/:id/view");

export default testRouter;
