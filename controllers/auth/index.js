import { contactDecorator } from "../../helpers/index.js";
import signup from "./singup.js";
import signin from "./singin.js";

export default {
  signup: contactDecorator(signup),
  signin: contactDecorator(signin),
};
