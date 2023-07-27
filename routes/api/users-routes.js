import express from "express";
import usersControllers from "../../controllers/usersControllers/index.js";
import { validateRequestBody } from "../../middlewares/index.js";
import { userJoiSchemas } from "../../schemas/index.js";

const router = express.Router();

router.post(
  "/signup",
  validateRequestBody(userJoiSchemas.userSignupSchema),
  usersControllers.signup
);

router.post(
  "/signin",
  validateRequestBody(userJoiSchemas.userSinginSchema),
  usersControllers.signin
);

export default router;
