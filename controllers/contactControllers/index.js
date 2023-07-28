import { controllerDecorator } from "../../helpers/index.js";
import getAllContacts from "./getAllContacts.js";
import getContactById from "./getContactById.js";
import addNewContact from "./addNewContact.js";
import removeContactById from "./removeContactById.js";
import updateStatusContactById from "./updateStatusContactById.js";
import updateContactById from "./updateContactById.js";

export default {
  getAllContacts: controllerDecorator(getAllContacts),
  getContactById: controllerDecorator(getContactById),
  addNewContact: controllerDecorator(addNewContact),
  removeContactById: controllerDecorator(removeContactById),
  updateContactById: controllerDecorator(updateContactById),
  updateStatusContactById: controllerDecorator(updateStatusContactById),
};
