const mongoose = require("mongoose");
require("dotenv").config();

const { DB_HOST } = process.env;

const app = require("./app");

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000, () => console.log("Server running on port 3000")))
  .catch((error) => console.log(error.message));
