import express from "express";
import contactControllers from "../../controllers/contactControllers.js";
import { contactAddSchema } from "../../schemas/index.js";
import { validateRequestBody } from "../../middlewares/index.js";

const router = express.Router();

router.get("/", contactControllers.getAllContacts);

router.get("/:contactId", contactControllers.getContactById);

router.post("/", validateRequestBody(contactAddSchema), contactControllers.addNewContact);

router.delete("/:contactId", contactControllers.removeContactById);

router.put(
  "/:contactId",
  validateRequestBody(contactAddSchema),
  contactControllers.updateContactById
);

export default router;
