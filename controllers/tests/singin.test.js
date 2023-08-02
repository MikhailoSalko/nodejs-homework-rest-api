import userControllers from "../usersControllers/index.js";
import app from "../../app.js";
import userRouter from "../../routes/api/users-routes.js";
import autorizationUser from "../../middlewares/index.js";

describe("test signin function", () => {
  beforeAll(() => app.listen(3000));
  afterAll(() => app.close());
});
