import prisma from "../src/database/prisma";
import { deleteAllData } from "./factories/cleanerFactory";

beforeEach(async () => {
  await deleteAllData();
});

afterAll(async () => {
  await prisma.$disconnect();
});
