import request from "supertest";
import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import usersControllers from "../usersControllers/index.js";
const { DB_HOST, PORT } = process.env;

const app = express();
const baseURL = "http://localhost:3000";
app.post("/api/users/signin", usersControllers.signin);

const user = {
  email: "Ivan@gmail.com",
  password: "123456",
};

describe("test signin function", () => {
  beforeAll(
    async () =>
      await mongoose
        .connect(DB_HOST)
        .then(() =>
          app.listen(PORT, () => {
            console.log("Database connection successful");
          })
        )
        .catch((er) => {
          console.log(er.message);
          process.exit(1);
        })
  );
  afterAll(async () => await mongoose.disconnect());
  test("test response status", async () => {
    const res = await request(baseURL).post("/api/users/signin").send(user);
    // console.log(res.request.Test._data);
    // console.log(res);
    expect(res.status).toBe(200);
    // expect(res.user).toBe(200);
  });
});
