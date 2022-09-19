import { faker } from "@faker-js/faker";
import prisma from "./../../src/database/prisma";

export default async function createDiscipline(termId: number) {
  const discipline = await prisma.discipline.create({
    data: {
      termId,
      name: faker.lorem.text(),
    },
  });

  return discipline;
}
