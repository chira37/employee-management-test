import mongoose from "mongoose";
import app from "./app";
import config from "./config";

mongoose.connect(config.mongoUrl);
mongoose.connection.on("error", () => {
  throw new Error(`Unable to connect to database: ${config.mongoUrl}`);
});

const server = app.listen(config.port, () => {
  console.log(`Listening to port ${config.port}`);
});
