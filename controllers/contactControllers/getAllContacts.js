import { Contact } from "../../models/index.js";

export const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const contacts = await Contact.find({ owner }).populate("owner", "email subscription");
  res.json(contacts);
};

export default getAllContacts;
