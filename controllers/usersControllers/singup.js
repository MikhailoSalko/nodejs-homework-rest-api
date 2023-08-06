import bcryptjs from "bcryptjs";
import gravatar from "gravatar";

import { User } from "../../models/index.js";
import { HttpErrorCreator } from "../../helpers/index.js";

export const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpErrorCreator(409, "Email in use");
  }
  const hashedPassword = await bcryptjs.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const newUser = await User.create({ ...req.body, password: hashedPassword, avatarURL });

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
      avatarURL,
    },
  });
};

export default signup;
