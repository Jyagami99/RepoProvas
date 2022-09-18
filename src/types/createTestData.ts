import { Test } from "@prisma/client";

export type CreateTestData = Omit<
  Test,
  "id" | "teacherDisciplineId" | "view"
> & {
  teacherId: number;
  disciplineId: number;
};
