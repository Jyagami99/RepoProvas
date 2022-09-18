import prisma from "../database/prisma";

async function findById(id: number) {
  return prisma.user.findUnique({
    where: { id },
  });
}

export default {
  findById,
};
