import { Contact } from "../../models/index.js";

export const getAllContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

export default getAllContacts;
