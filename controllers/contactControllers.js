import { HttpErrorCreator, contactDecorator } from "../helpers/index.js";
import { Contact } from "../models/index.js";

export const getAllContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

export const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const searchContact = await Contact.findById(contactId);
  if (!searchContact) {
    throw HttpErrorCreator(404, "Not Found");
  }
  res.json(searchContact);
};

export const addNewContact = async (req, res) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
};

export const removeContactById = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await Contact.findByIdAndRemove(contactId);
  if (!deletedContact) {
    throw HttpErrorCreator(404, "Not Found");
  }
  res.json({ message: "contact deleted" });
};

export const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
  if (!updatedContact) {
    throw HttpErrorCreator(404, "Not Found");
  }
  res.json(updatedContact);
};

export const updateStatusContactById = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
  if (!updatedContact) {
    throw HttpErrorCreator(404, "Not Found");
  }
  res.json(updatedContact);
};

export default {
  getAllContacts: contactDecorator(getAllContacts),
  getContactById: contactDecorator(getContactById),
  addNewContact: contactDecorator(addNewContact),
  removeContactById: contactDecorator(removeContactById),
  updateContactById: contactDecorator(updateContactById),
  updateStatusContactById: contactDecorator(updateStatusContactById),
};
