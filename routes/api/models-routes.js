const express = require("express");

const ctrl = require("../../controllers/models-controllers");
const { validateBody } = require("../../utils");
const {schemas} = require("../../models/model");

const router = express.Router();

router.get("/", ctrl.getAllModels);

router.get("/:id", ctrl.getModelById);

router.post("/", validateBody(schemas.addSchema), ctrl.addModel);

router.put("/:id", validateBody(schemas.addSchema), ctrl.updateModelById);

router.patch("/:id/favorite", validateBody(schemas.updateFavoriteSchema), ctrl.updateFavoriteById);

router.delete("/:id", ctrl.deleteModelById);

module.exports = router;
