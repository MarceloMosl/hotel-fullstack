import app, { init } from "../src/app";
import supertest from "supertest";
import { prisma } from "../src/config/database";

const api = supertest(app);
beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("Should return OK and status 200", () => {
  it("testando GET/tst", async () => {
    const resultado = await api.get("/tst");

    console.log(resultado.body);
    expect(resultado.status).toBe(200);
  });
});
