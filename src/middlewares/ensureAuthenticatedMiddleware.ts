import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { unauthorizedError } from "../utils/errorUtils";
import userService from "../services/userService";

export default async function ensureAuthenticatedMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  dotenv.config();

  const authorization = req.headers["authorization"];
  if (!authorization)
    throw unauthorizedError("Verifique o header authorization!");

  const token = authorization.replace("Bearer ", "");
  if (!token) throw unauthorizedError("Verifique o token!");

  try {
    const { userId } = jwt.verify(
      token,
      String(process.env.JWT_SECRET)
    ) as unknown as {
      userId: number;
    };
    const user = await userService.findById(userId);
    res.locals.user = user;

    next();
  } catch {
    throw unauthorizedError("Token inválido!");
  }
}
