import app, { init } from "../src/app";
import supertest from "supertest";

beforeAll(async () => {
  await init();
});

const api = supertest(app);

describe("Should return OK and status 200", () => {
  it("testando GET/tst", async () => {
    const resultado = await api.get("/tst");

    console.log(resultado.body);
  });
});
