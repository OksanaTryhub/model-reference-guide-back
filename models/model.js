const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../utils");

const modelSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name must be!"],
  },
  info: {
    type: String,
    required: true,
  },
  photo: String,
  largePhoto: String,
  favorite: {
    type: Boolean, 
    default: false,
  }
}, { versionKey: false, timestamps: true });

modelSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"name" is required field`,
    "string.empty": `"name" can't be empty`,
  }),
  info: Joi.string().required().messages({
    "any.required": `"info" is required field`,
    "string.empty": `"info" can't be empty`,
  }),
  photo: Joi.string(),
  largePhoto: Joi.string(),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required()
})

const schemas = {
  addSchema,
  updateFavoriteSchema,
}

const Model = model("model", modelSchema);

module.exports = {
  Model,
  schemas,
};
