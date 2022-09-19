import prisma from "../database/prisma";

async function getByTeacherAndDiscipline(
  teacherId: number,
  disciplineId: number
) {
  return prisma.teacherDiscipline.findFirst({
    where: {
      AND: {
        disciplineId,
        teacherId,
      },
    },
  });
}

const teacherDisciplineRepository = { getByTeacherAndDiscipline };

export default teacherDisciplineRepository;
