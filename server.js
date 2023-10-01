const mongoose = require("mongoose");

const app = require("./app");
//pv5RKiahvHBf8tsb

const DB_HOST = "mongodb+srv://Oksana:pv5RKiahvHBf8tsb@cluster0.vpq2hoa.mongodb.net/models?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000, () => console.log("Server running on port 3000")))
  .catch((error) => console.log(error.message));
