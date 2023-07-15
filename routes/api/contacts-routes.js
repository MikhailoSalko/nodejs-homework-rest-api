import express from "express";
import contactsService from "../../models/contacts.js";
import HttpError from "../../helpers/HttpError.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const contacts = await contactsService.listContacts();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const searchContact = await contactsService.getContactById(req.params.contactId);
    if (!searchContact) {
      throw HttpError(404, `Not Found`);
    }
    res.json(searchContact);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).json({ message: "template message" });
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    res.json({ message: "template message" });
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    res.json({ message: "template message" });
  } catch (error) {
    next(error);
  }
});

export default router;
