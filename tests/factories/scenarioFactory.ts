import createCategory from "./categoryFactory";
import createDiscipline from "./disciplineFactory";
import createTeacherDiscipline from "./teacherDisciplineFactory";
import createTeacher from "./teacherFactory";
import createTerms from "./termFactory";
import createTest from "./testFactory";

export async function createScenarioOneTeacherWithOneTest() {
  const category = await createCategory();
  const teacher = await createTeacher();
  const terms = await createTerms();
  const discipline = await createDiscipline(terms[0].id);
  const teacherDiscipline = await createTeacherDiscipline(
    teacher.id,
    discipline.id
  );
  const test = await createTest(category.id, teacherDiscipline.id);

  return {
    category,
    teacher,
    terms,
    discipline,
    teacherDiscipline,
    test,
  };
}

export async function createScenarioTwoTeachersWithTwoTestsEach() {
  const category = await createCategory();
  const teacher1 = await createTeacher();
  const teacher2 = await createTeacher();
  const terms = await createTerms();
  const discipline = await createDiscipline(terms[0].id);
  const discipline2 = await createDiscipline(terms[1].id);

  const teacherDiscipline1 = await createTeacherDiscipline(
    teacher1.id,
    discipline.id
  );
  const teacherDiscipline2 = await createTeacherDiscipline(
    teacher2.id,
    discipline2.id
  );

  const test1 = await createTest(category.id, teacherDiscipline1.id);
  const test2 = await createTest(category.id, teacherDiscipline1.id);

  const test3 = await createTest(category.id, teacherDiscipline2.id);
  const test4 = await createTest(category.id, teacherDiscipline2.id);

  return {
    category,
    teachers: [teacher1, teacher2],
    terms,
    discipline,
    teacherDisciplines: [teacherDiscipline1, teacherDiscipline2],
    tests: [test1, test2, test3, test4],
  };
}
