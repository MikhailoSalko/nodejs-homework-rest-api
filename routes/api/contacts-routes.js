import express from "express";
import Joi from "joi";
import contactsService from "../../models/contacts.js";
import HttpErrorCreator from "../../helpers/HttpErrorCreator.js";

const router = express.Router();

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

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
      throw HttpErrorCreator(404, "Not Found");
    }
    res.json(searchContact);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = schema.validate(req.body);
    if (error) {
      throw HttpErrorCreator(400, error.message);
    }
    const newContact = await contactsService.addContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const deletedContact = await contactsService.removeContact(req.params.contactId);
    if (!deletedContact) {
      throw HttpErrorCreator(404, "Not Found");
    }
    res.json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const { error } = schema.validate(req.body);
    if (error) {
      throw HttpErrorCreator(400, error.message);
    }
    const updatedContact = await contactsService.updateContact(req.params.contactId, req.body);
    if (!updatedContact) {
      throw HttpErrorCreator(404, "Not Found");
    }
    res.json(updatedContact);
  } catch (error) {
    next(error);
  }
});

export default router;
