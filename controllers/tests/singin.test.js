import userControllers from "../usersControllers/index.js";
import app from "../../app.js";
import userRouter from "../../routes/api/users-routes.js";
import { autorizationUser } from "../../middlewares/index.js";

const testFunc = (a, b) => a + b;

describe("test signin function", () => {
  // beforeAll(async () => {
  //   console.log("running server");
  //   await app.listen(3000);
  // });
  // afterAll(async () => {
  //   console.log("server close");
  //   await app.close();
  // });
  // beforeAll(() => console.log("hello"));
  // afterAll(() => console.log("good buy"));
  test("test function expect 5", () => {
    expect(testFunc(2, 3)).toBe(5);
  });
});
