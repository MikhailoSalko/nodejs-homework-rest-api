import jwt from "jsonwebtoken";
import { HttpErrorCreator } from "../helpers/index.js";
import { User } from "../models/index.js";

const { JWT_SECRET } = process.env;

export const autorizationUser = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    console.log("before next");
    next(HttpErrorCreator(401));
    console.log("after next");
  }
  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    // console.log("id: ", id);
    const user = await User.findById(id);
    // console.log("user: ", user);
    if (!user || !user.token || user.token !== token) {
      next(HttpErrorCreator(401));
    }
    req.user = user;
    next();
  } catch {
    console.log("enter catch after first next");
    next(HttpErrorCreator(401));
  }
};

export default autorizationUser;
