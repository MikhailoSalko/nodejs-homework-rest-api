import Joi from "joi";

const userSignupSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required(),
  subscription: Joi.string().valid("starter", "pro", "business"),
});

const userSinginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required(),
});

const userUpdateSubscription = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});

export default {
  userSignupSchema,
  userSinginSchema,
  userUpdateSubscription,
};
