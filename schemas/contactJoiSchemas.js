import Joi from "joi";

const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({ "any.required": "missing required name field" }),
  email: Joi.string()
    .email()
    .required()
    .messages({ "any.required": "missing required email field" }),
  phone: Joi.string().required().messages({ "any.required": "missing required phone field" }),
  favotire: Joi.boolean(),
});

const contactsFavoriteSchema = Joi.object({
  favotire: Joi.boolean().required(),
});

export default { contactAddSchema, contactsFavoriteSchema };
