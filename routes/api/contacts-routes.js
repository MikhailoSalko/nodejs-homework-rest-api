import express from "express";
import contactControllers from "../../controllers/contactControllers/index.js";
import { contactJoiSchemas } from "../../schemas/index.js";
import { validateRequestBody, validateId } from "../../middlewares/index.js";
import { autorizationUser } from "../../middlewares/index.js";

const router = express.Router();

router.use(autorizationUser);

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
  "/:contactId/favorite",
  validateId,
  validateRequestBody(contactJoiSchemas.contactsFavoriteSchema),
  contactControllers.updateStatusContactById
);

export default router;
