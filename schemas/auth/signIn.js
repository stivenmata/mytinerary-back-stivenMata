import Joi from "joi";

const schema = Joi.object({
  email: Joi.string().required().email().messages({
    "string.base": "Email must be a string",
    "string.email": "Invalid email format"
  }),
  password: Joi.string().required().min(4).messages({
    "string.base": "Password must be a string",
    "string.min": "Password must be at least 4 characters long"
  })
});

export default schema;
