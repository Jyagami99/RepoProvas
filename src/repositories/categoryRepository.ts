import prisma from "../database/prisma";

async function findMany() {
  return prisma.category.findMany();
}

async function getById(id: number) {
  return prisma.category.findUnique({ where: { id } });
}

const categoryRepository = { findMany, getById };

export default categoryRepository;
