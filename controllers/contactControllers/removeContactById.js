import { Contact } from "../../models/index.js";
import { HttpErrorCreator } from "../../helpers/index.js";

export const removeContactById = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await Contact.findByIdAndRemove(contactId);
  if (!deletedContact) {
    throw HttpErrorCreator(404);
  }
  res.json({ message: "contact deleted" });
};

export default removeContactById;
