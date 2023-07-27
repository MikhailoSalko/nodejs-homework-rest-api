import { Contact } from "../../models/index.js";
import { HttpErrorCreator } from "../../helpers/index.js";

export const updateStatusContactById = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
  if (!updatedContact) {
    throw HttpErrorCreator(404);
  }
  res.json(updatedContact);
};

export default updateStatusContactById;
