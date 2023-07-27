import { Schema, model } from "mongoose";
import { handleMongooseError, handleRunValidators } from "./hooks.js";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.pre("findOneAndUpdate", handleRunValidators);

contactSchema.post("save", handleMongooseError);

contactSchema.post("findOneAndUpdate", handleMongooseError);

const Contact = model("contact", contactSchema);

export default Contact;
