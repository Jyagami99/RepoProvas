import bcrypt from "bcrypt";
import prisma from "../../src/database/prisma";
import { CreateUserData } from "../../src/types/createUserData";

export default async function userFactory(user: CreateUserData) {
  return prisma.user.create({
    data: {
      ...user,
      password: bcrypt.hashSync(user.password, 10),
    },
  });
}
