import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import * as dotenv from "dotenv";
import employee from "./modules/employee/route";
import errorHandler from "./middlewares/errorHandler";
import swaggerSpec from "./config/swagger";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV !== "production") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

app.use("/api", employee);

app.use(errorHandler);

export default app;
