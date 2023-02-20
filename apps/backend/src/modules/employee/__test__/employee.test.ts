import supertest from "supertest";
import mongoose from "mongoose";
import app from "../../../app";
import config from "../../../config";
import { MongoMemoryServer } from "mongodb-memory-server";

const requestBody = {
  firstName: "first name",
  lastName: "last name",
  phone: "+94123456789",
  email: "test@gmail.com",
  gender: "m",
};

describe("test employee", () => {
  let employeeId = "";

  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
    mongoose.connection.on("error", () => {
      throw new Error(`Unable to connect to database: ${config.mongoUrl}`);
    });

    const { body } = await supertest(app).post("/api/employee").send(requestBody);
    employeeId = body?.data?._id;
  });

  afterAll(() => {
    mongoose.disconnect();
    mongoose.connection.close();
  });

  describe("add employee", () => {
    it("should return validation error", async () => {
      await supertest(app).post("/api/employee").send({}).expect(400);
    });
    it("should add employee", async () => {
      await supertest(app).post("/api/employee").send(requestBody).expect(200);
    });
  });

  describe("update employee", () => {
    it("should return not found", async () => {
      await supertest(app).put("/api/employee/63f23f3c6d813df83bb5650e").send(requestBody).expect(404);
    });
    it("should update employee", async () => {
      await supertest(app).put(`/api/employee/${employeeId}`).send(requestBody).expect(200);
    });
  });

  describe("get employee", () => {
    it("should return not found", async () => {
      await supertest(app).get("/api/employee/63f23f3c6d813df83bb5650e").expect(404);
    });
    it("should get employee", async () => {
      await supertest(app).get(`/api/employee/${employeeId}`).expect(200);
    });
  });

  describe("get employees with pagination", () => {
    it("should return validation error", async () => {
      await supertest(app).get("/api/employee").expect(400);
    });
  });
  it("should get employees", async () => {
    const { body } = await supertest(app).get("/api/employee?page=1&limit=1").expect(200);
    expect(body?.data?.pagination).toMatchObject({ page: 1, totalPages: 2 });
  });

  describe("delete employee", () => {
    it("should return not found", async () => {
      await supertest(app).delete("/api/employee/63f23f3c6d813df83bb5650e").expect(404);
    });
    it("should delete employee", async () => {
      await supertest(app).delete(`/api/employee/${employeeId}`).expect(200);
    });
  });
});
