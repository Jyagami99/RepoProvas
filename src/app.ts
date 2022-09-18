import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";

import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";
import categoryRouter from "./routes/categoryRouter";
import disciplineRouter from "./routes/disciplineRouter";
import teacherRouter from "./routes/teacherRouter";
import testRouter from "./routes/testRouter";
import userRouter from "./routes/userRouter";

dotenv.config();

export const app = express();

app.use(cors());
app.use(json());

app.use(categoryRouter);
app.use(disciplineRouter);
app.use(teacherRouter);
app.use(testRouter);
app.use(userRouter);
app.use(errorHandlerMiddleware);

export default app;
