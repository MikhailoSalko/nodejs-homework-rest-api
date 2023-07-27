import { Contact } from "../../models/index.js";
import { HttpErrorCreator } from "../../helpers/index.js";

export const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
  if (!updatedContact) {
    throw HttpErrorCreator(404, "Not Found");
  }
  res.json(updatedContact);
};

export default updateContactById;
