import { Contact } from "../../models/index.js";

export const addNewContact = async (req, res) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
};

export default addNewContact;
