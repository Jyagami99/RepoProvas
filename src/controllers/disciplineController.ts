import { Request, Response } from "express";
import disciplineService from "../services/disciplineService";

async function get(req: Request, res: Response) {
  const { term } = req.params;
  const discipline = await disciplineService.getByTerm(Number(term));

  res.send(discipline);
}

const disciplineController = { get };

export default disciplineController;
