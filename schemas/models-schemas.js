const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"name" is required field`,
    "string.empty": `"name" can't be empty`,
  }),
  info: Joi.string().required(),
});

module.exports = {
  addSchema,
};
