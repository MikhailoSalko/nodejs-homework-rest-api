import express from "express";
import usersControllers from "../../controllers/usersControllers/index.js";
import { validateRequestBody } from "../../middlewares/index.js";
import { userJoiSchemas } from "../../schemas/index.js";
import { autorizationUser } from "../../middlewares/index.js";

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
router.get("/current", autorizationUser, usersControllers.getCurrent);

export default router;
