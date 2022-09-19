import teacherDisciplineRepository from "../repositories/teacherDisciplineRepository";

async function getByTeacherAndDiscipline(
  teacherId: number,
  disciplineId: number
) {
  return teacherDisciplineRepository.getByTeacherAndDiscipline(
    teacherId,
    disciplineId
  );
}

const teacherDisciplineService = { getByTeacherAndDiscipline };

export default teacherDisciplineService;
