import { Contact } from "../../models/index.js";
import { HttpErrorCreator } from "../../helpers/index.js";

export const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const searchContact = await Contact.findById(contactId);
  if (!searchContact) {
    throw HttpErrorCreator(404);
  }
  res.json(searchContact);
};

export default getContactById;
