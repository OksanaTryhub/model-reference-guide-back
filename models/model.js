const { Schema, model } = require("mongoose");

const modelSchema = new Schema({
  name: String,
  info: String,
  photo: String,
  largePhoto: String,
});

const Model = model("model", modelSchema);

module.exports = Model;
