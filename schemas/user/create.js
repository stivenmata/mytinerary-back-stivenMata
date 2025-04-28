import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name is required"
  }),
  lastName: Joi.string().required().messages({
    "string.base": "Last Name must be a string",
    "string.empty": "Last Name is required"
  }),
  email: Joi.string().required().email().messages({
    "string.base": "Email must be a string",
    "string.email": "Invalid email format",
    "string.empty": "Email is required"
  }),
  password: Joi.string()
    .required()
    .min(8)
    .regex(/[A-Z]/) // Al menos una mayúscula
    .regex(/[0-9]/) // Al menos un número
    .regex(/[\W_]/) // Al menos un carácter especial
    .messages({
      "string.base": "Password must be a string",
      "string.min": "Password must be at least 8 characters long",
      "string.empty": "Password is required",
      "string.pattern.base": "Password must contain at least one uppercase letter, one number, and one special character"
    }),
  photo: Joi.string().uri().required().messages({
    "string.base": "Photo URL must be a string",
    "string.uri": "Invalid URL format for photo",
    "string.empty": "Photo URL is required"
  }),
  country: Joi.string().required().messages({
    "string.base": "Country must be a string",
    "string.empty": "Country is required"
  }),
});

export default schema;
