import { Request, Response } from "express";

async function signUp(req: Request, res: Response) {}

async function signIn(req: Request, res: Response) {}

const userController = {
  signUp,
  signIn,
};

export default userController;
