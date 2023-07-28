import { Contact } from "../../models/index.js";

export const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  console.log(req.query);
  const { page = 1, limit = 5, favorite } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find({ owner, favorite }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "email subscription");
  res.json(contacts);
};

export default getAllContacts;
