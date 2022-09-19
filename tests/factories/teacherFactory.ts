import { faker } from "@faker-js/faker";

import prisma from "./../../src/database/prisma";

export default async function createTeacher() {
  const teacher = await prisma.teacher.create({
    data: {
      name: faker.name.fullName(),
    },
  });

  return teacher;
}
