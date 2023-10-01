const models = require("../models/index");
const { HttpError } = require("../helpers");
const { ctrlWrapper } = require("../utils");

const getAllModels = async (req, res) => {
  const result = await models.getAll();
  res.json(result);
};

const getModelById = async (req, res) => {
  const { id } = req.params;
  const result = await models.getById(id);
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
  const result = await models.add(req.body);
  res.status(201).json(result);
};

const updateModelById = async (req, res) => {
  //   const { error } = addSchema.validate(req.body);
  //   if (error) {
  //     throw HttpError(400, error.message);
  //   }
  const { id } = req.params;
  const result = await models.updateById(id, req.body);
  if (!result) {
    throw HttpError(404, `Model with id=${id} not found`);
  }
  res.json(result);
};

const deleteModelById = async (req, res) => {
  const { id } = req.params;
  const result = await models.deleteById(id);
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
  deleteModelById: ctrlWrapper(deleteModelById),
};
