const {Model} = require("../models/model");
const { HttpError } = require("../helpers");
const { ctrlWrapper } = require("../utils");

const getAllModels = async (req, res) => {
  const result = await Model.find({}, "-createdAt -updatedAt");
  res.json(result);
};

const getModelById = async (req, res) => {
  const { id } = req.params;
  const result = await Model.findById(id);
  if (!result) {
    throw HttpError(404, `Model with id=${id} not found`);
    // const error = new Error(`Model with id=${id} not found`);
    // error.status = 404;
    // throw error;
  }
  res.json(result);
};

const addModel = async (req, res) => {
  //   const { error } = addSchema.validate(req.body);
  //   if (error) {
  //     throw HttpError(400, error.message);
  //   }
  const result = await Model.create(req.body);
  res.status(201).json(result);
};

const updateModelById = async (req, res) => {
  //   const { error } = addSchema.validate(req.body);
  //   if (error) {
  //     throw HttpError(400, error.message);
  //   }
  const { id } = req.params; 
  const result = await Model.findByIdAndUpdate(id, req.body, {new: true});
  if (!result) {
    throw HttpError(404, `Model with id=${id} not found`);
  }
  res.json(result);
};

const updateFavoriteById = async (req, res) => {
  const { id } = req.params; 
  const result = await Model.findByIdAndUpdate(id, req.body, {new: true});
  if (!result) {
    throw HttpError(404, `Model with id=${id} not found`);
  }
  res.json(result);
};

const deleteModelById = async (req, res) => {
  const { id } = req.params;
  const result = await Model.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, `Model with id=${id} not found`);
  }
  // res.json(result);
  // res.status(204).send();
  res.json({
    message: "Delete success",
  });
};

module.exports = {
  getAllModels: ctrlWrapper(getAllModels),
  getModelById: ctrlWrapper(getModelById),
  addModel: ctrlWrapper(addModel),
  updateModelById: ctrlWrapper(updateModelById),
  updateFavoriteById: ctrlWrapper(updateFavoriteById),
  deleteModelById: ctrlWrapper(deleteModelById),
};
