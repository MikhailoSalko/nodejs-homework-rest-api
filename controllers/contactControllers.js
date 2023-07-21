import { HttpErrorCreator, contactDecorator } from "../helpers/index.js";
import { Contact } from "../schemas/index.js";

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

// export const addNewContact = async (req, res) => {
//   const newContact = await contactsService.addContact(req.body);
//   res.status(201).json(newContact);
// };
// export const removeContactById = async (req, res) => {
//   const deletedContact = await contactsService.removeContact(req.params.contactId);
//   if (!deletedContact) {
//     throw HttpErrorCreator(404, "Not Found");
//   }
//   res.json({ message: "contact deleted" });
// };

// export const updateContactById = async (req, res) => {
//   const updatedContact = await contactsService.updateContact(req.params.contactId, req.body);
//   if (!updatedContact) {
//     throw HttpErrorCreator(404, "Not Found");
//   }
//   res.json(updatedContact);
// };

export default {
  getAllContacts: contactDecorator(getAllContacts),
  getContactById: contactDecorator(getContactById),
  // addNewContact: contactDecorator(addNewContact),
  // removeContactById: contactDecorator(removeContactById),
  // updateContactById: contactDecorator(updateContactById),
};
