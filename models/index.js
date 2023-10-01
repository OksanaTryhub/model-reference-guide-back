const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const modelsPath = path.join(__dirname, "models.json");
// const modelsPath = path.resolve("models", "models.json");

const getAll = async () => {
  const data = await fs.readFile(modelsPath, "utf-8");
  return JSON.parse(data);
};

const getById = async (id) => {
  const models = await getAll();
  const result = models.find((item) => item.id === id);
  return result || null;
};

const add = async ({ name, info }) => {
  const models = await getAll();
  const newModel = {
    id: nanoid(),
    name,
    info,
  };
  models.push(newModel);
  await fs.writeFile(modelsPath, JSON.stringify(models, null, 2));
  return newModel;
};

const updateById = async (id, data) => {
  const models = await getAll();
  const index = models.findIndex((item) => item.id === id);

  if (index === -1) {
    return null;
  }
  models[index] = { id, ...data };
  await fs.writeFile(modelsPath, JSON.stringify(models, null, 2));
  return models[index];
};

const deleteById = async (id) => {
  const models = await getAll();
  const index = models.findIndex((item) => item.id === id);

  if (index === -1) {
    return null;
  }
  const [result] = models.splice(index, 1);
  await fs.writeFile(modelsPath, JSON.stringify(models, null, 2));
  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
};
