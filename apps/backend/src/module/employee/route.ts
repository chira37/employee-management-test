import express from "express";
import validator from "../../middlewares/validator";
import employeeController from "./controller";
import schema from "./schema";

const router = express.Router();

router.post("/employee", validator(schema.addEmployee), employeeController.addEmployee);
router.get("/employee/:id", validator(schema.getEmployee), employeeController.getEmployee);
router.get("/employee", employeeController.getEmployeesWithPagination);
router.delete("/employee/:id", validator(schema.deleteEmployee), employeeController.deleteEmployee);
router.put("/employee/:id", validator(schema.updateEmployee), employeeController.updateEmployee);

export default router;
