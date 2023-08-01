import { Schema, model } from "mongoose";
import { handleMongooseError, handleRunValidators } from "./hooks.js";

const userSchema = new Schema(
  {
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
    },
    avatarURL: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("findOneAndUpdate", handleRunValidators);

userSchema.post("save", handleMongooseError);

userSchema.post("findOneAndUpdate", handleMongooseError);

const User = model("user", userSchema);

export default User;
