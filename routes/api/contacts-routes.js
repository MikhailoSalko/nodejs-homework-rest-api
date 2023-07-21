import express from "express";
import contactControllers from "../../controllers/contactControllers.js";
import { contactJoiSchemas } from "../../schemas/index.js";
import { validateRequestBody, validateId } from "../../middlewares/index.js";

const router = express.Router();

router.get("/", contactControllers.getAllContacts);

router.get("/:contactId", validateId, contactControllers.getContactById);

router.post(
  "/",
  validateRequestBody(contactJoiSchemas.contactAddSchema),
  contactControllers.addNewContact
);

router.delete("/:contactId", validateId, contactControllers.removeContactById);

router.put(
  "/:contactId",
  validateId,
  validateRequestBody(contactJoiSchemas.contactAddSchema),
  contactControllers.updateContactById
);

router.patch(
  "/:contactId",
  validateId,
  validateRequestBody(contactJoiSchemas.contactsFavoriteSchema),
  contactControllers.updateStatusContactById
);

export default router;
