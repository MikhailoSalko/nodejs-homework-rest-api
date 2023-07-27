import { contactDecorator } from "../../helpers/index.js";
import getAllContacts from "./getAllContacts.js";
import getContactById from "./getContactById.js";
import addNewContact from "./addNewContact.js";
import removeContactById from "./removeContactById.js";
import updateStatusContactById from "./updateStatusContactById.js";
import updateContactById from "./updateContactById.js";

export default {
  getAllContacts: contactDecorator(getAllContacts),
  getContactById: contactDecorator(getContactById),
  addNewContact: contactDecorator(addNewContact),
  removeContactById: contactDecorator(removeContactById),
  updateContactById: contactDecorator(updateContactById),
  updateStatusContactById: contactDecorator(updateStatusContactById),
};
