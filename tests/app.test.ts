import { faker } from "@faker-js/faker";
import supertest from "supertest";

import app from "./../src/app";
import {
  createScenarioOneTeacherWithOneTest,
  createScenarioTwoTeachersWithTwoTestsEach,
} from "./factories/scenarioFactory";
import prisma from "./../src/database/prisma";
import userFactory from "./factories/userFactory";
import { CreateTestData } from "../src/types/createTestData";
import tokenFactory from "./factories/tokenFactory";
import { deleteAllData } from "./factories/deleteDataFactory";

beforeEach(async () => {
  await deleteAllData();
});

const agent = supertest(app);

describe("Testes de usuário", () => {
  it("Deve criar um usuário", async () => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    await agent.post("/sign-up").send(user);

    const userCreated = await prisma.user.findFirst({
      where: { email: user.email },
    });

    expect(userCreated).not.toBeNull();
  });

  it("Deve logar um usuário", async () => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    userFactory(user);
    const response = await agent.post("/sign-in").send(user);
    const { token } = response.body;
    expect(token).not.toBeNull();
  });
});

describe("Testes de provas", () => {
  it("Deve retornar provas por disciplinas", async () => {
    await createScenarioOneTeacherWithOneTest();
    const token = await tokenFactory();

    const response = await agent
      .get("/tests?groupBy=disciplines")
      .set("Authorization", `Bearer ${token}`);

    expect(response.body.tests.length).toEqual(3);
    expect(response.body.tests[0].disciplines.length).toEqual(1);
  });

  it("Deve retornar provas por professor", async () => {
    const scenario = await createScenarioTwoTeachersWithTwoTestsEach();
    const token = await tokenFactory();
    const response = await agent
      .get("/tests?groupBy=teachers")
      .set("Authorization", `Bearer ${token}`);

    const { tests } = response.body;
    expect(tests.length).toBe(2);
    expect(tests[0].teacher).toBe(scenario.teachers[0].name);
    expect(tests[0].categories.length).toBe(1);
    expect(tests[0].categories[0].tests.length).toBe(2);

    expect(tests[1].teacher).toBe(scenario.teachers[1].name);
    expect(tests[1].categories.length).toBe(1);
    expect(tests[1].categories[0].tests.length).toBe(2);
  });

  it("Deve criar uma prova", async () => {
    const { category, discipline, teacher } =
      await createScenarioOneTeacherWithOneTest();

    const test: CreateTestData = {
      name: faker.lorem.words(5),
      pdfUrl: faker.internet.url(),
      categoryId: category.id,
      disciplineId: discipline.id,
      teacherId: teacher.id,
    };

    const token = await tokenFactory();

    const response = await agent
      .post("/tests")
      .set("Authorization", `Bearer ${token}`)
      .send(test);

    expect(response.status).toBe(201);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
