import express from "express";
import usersControllers from "../../controllers/usersControllers/index.js";
import { validateRequestBody } from "../../middlewares/index.js";
import { userJoiSchemas } from "../../schemas/index.js";
import { autorizationUser } from "../../middlewares/index.js";
import { upload } from "../../middlewares/index.js";

const router = express.Router();

router.post(
  "/signup",
  validateRequestBody(userJoiSchemas.userSignupSchema),
  usersControllers.signup
);

router.get("/verify/:verificationToken", usersControllers.verifyEmail);

router.post(
  "/verify",
  validateRequestBody(userJoiSchemas.userEmailSchema),
  usersControllers.resendVerificationEmail
);

router.post(
  "/signin",
  validateRequestBody(userJoiSchemas.userSinginSchema),
  usersControllers.signin
);

router.get("/current", autorizationUser, usersControllers.getCurrent);

router.post("/signout", autorizationUser, usersControllers.signout);

router.patch(
  "/subscription",
  autorizationUser,
  validateRequestBody(userJoiSchemas.userUpdateSubscription),
  usersControllers.updateUserSubscription
);

router.patch("/avatars", autorizationUser, upload.single("avatar"), usersControllers.updateAvatars);

export default router;
