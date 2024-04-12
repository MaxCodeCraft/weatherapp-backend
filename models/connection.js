const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://admin:nvefwBs4sAbQmGRR@cluster0.1xullqd.mongodb.net/weatherapp";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
