import { controllerDecorator } from "../../helpers/index.js";
import signup from "./singup.js";
import signin from "./singin.js";
import getCurrent from "./getCurrent.js";

export default {
  signup: controllerDecorator(signup),
  signin: controllerDecorator(signin),
  getCurrent: controllerDecorator(getCurrent),
};
