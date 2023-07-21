import express from "express";
import contactControllers from "../../controllers/contactControllers.js";
import { contactJoiSchemas } from "../../schemas/index.js";
import { validateRequestBody, validateId } from "../../middlewares/index.js";

const router = express.Router();

router.get("/", contactControllers.getAllContacts);

router.get("/:contactId", validateId, contactControllers.getContactById);

// router.post("/", validateRequestBody(contactAddSchema), contactControllers.addNewContact);

// router.delete("/:contactId", contactControllers.removeContactById);

// router.put(
//   "/:contactId",
//   validateRequestBody(contactAddSchema),
//   contactControllers.updateContactById
// );

export default router;
