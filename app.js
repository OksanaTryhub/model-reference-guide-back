const express = require("express");
const cors = require("cors");
require("dotenv").config();

const modelsRoutes = require("./routes/api/models-routes");
const app = express();
// const corsMiddleware = cors();
// app.use(corsMiddleware);
app.use(cors());
app.use(express.json());

app.use("/api/models", modelsRoutes);

// app.use((request, response, next) => {
//   console.log("firstMDW");
//   next();
// });

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({
    message,
  });
});

module.exports = app;
