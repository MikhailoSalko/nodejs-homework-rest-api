import express from "express";
import contactControllers from "../../controllers/contactControllers/index.js";
import { contactJoiSchemas } from "../../schemas/index.js";
import { validateRequestBody, validateId } from "../../middlewares/index.js";
import { autorizationUser } from "../../middlewares/index.js";

const router = express.Router();

router.get("/", autorizationUser, contactControllers.getAllContacts);

router.get("/:contactId", autorizationUser, validateId, contactControllers.getContactById);

router.post(
  "/",
  autorizationUser,
  validateRequestBody(contactJoiSchemas.contactAddSchema),
  contactControllers.addNewContact
);

router.delete("/:contactId", autorizationUser, validateId, contactControllers.removeContactById);

router.put(
  "/:contactId",
  autorizationUser,
  validateId,
  validateRequestBody(contactJoiSchemas.contactAddSchema),
  contactControllers.updateContactById
);

router.patch(
  "/:contactId/favorite",
  autorizationUser,
  validateId,
  validateRequestBody(contactJoiSchemas.contactsFavoriteSchema),
  contactControllers.updateStatusContactById
);

export default router;
