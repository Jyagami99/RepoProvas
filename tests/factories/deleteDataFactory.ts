import prisma from "../../src/database/prisma";

export async function deleteAllData() {
  await prisma.$transaction([
    prisma.$executeRaw`TRUNCATE TABLE users`,
    prisma.$executeRaw`TRUNCATE TABLE categories CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE tests CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE disciplines CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "TeacherDiscipline" CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE terms CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE teachers CASCADE`,
  ]);
}
