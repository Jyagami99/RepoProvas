import prisma from "../database/prisma";

async function getById(id: number) {
  return prisma.discipline.findUnique({ where: { id } });
}

async function getByTerm(term: number) {
  return prisma.discipline.findMany({ where: { termId: term } });
}

const disciplineRepository = { getById, getByTerm };

export default disciplineRepository;
