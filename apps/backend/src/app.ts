import express from "express";
import cors from "cors";
import employee from "./module/employee/route";

import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", employee);

app.use(errorHandler);

export default app;
