import { Request, Response } from "express";

async function find(req: Request, res: Response) {}

async function insert(req: Request, res: Response) {}

async function view(req: Request, res: Response) {}

const testController = {
  find,
  insert,
  view,
};

export default testController;
