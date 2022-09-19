import prisma from "../database/prisma";
import { CreateUserData } from "../types/createUserData";

async function findById(id: number) {
  return prisma.user.findUnique({
    where: { id },
  });
}

async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

async function insert(createUserData: CreateUserData) {
  return prisma.user.create({ data: createUserData });
}

const userRepository = {
  findById,
  findByEmail,
  insert,
};

export default userRepository;
