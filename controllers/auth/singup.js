import { User } from "../../models/index.js";
import { HttpErrorCreator } from "../../helpers/index.js";

export const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpErrorCreator(409);
  }
};

export default signup;
