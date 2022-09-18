import prisma from "../database/prisma";
import { CreateUserData } from "../types/createUserData";

async function findById(id: number) {
  return prisma.user.findUnique({
    where: { id },
  });
}

async function findByEmail(email: string) {}

async function insert(createUserData: CreateUserData) {}

export default {
  findById,
  findByEmail,
  insert,
};
