/* eslint-disable import/no-anonymous-default-export */
import { Request, Response } from "express";
import { controllerHandler } from "../../utils/controllerHandler";
import { createResponse } from "../../utils/createResponse";
import employeeService from "./service";

const addEmployee = controllerHandler(async (req: Request, res: Response) => {
  const employee = await employeeService.addEmployee(req.body);
  createResponse(res, "Create employee success", employee);
});

const updateEmployee = controllerHandler(async (req: Request, res: Response) => {
  const employee = await employeeService.updateEmployee(req.params.id, req.body);
  createResponse(res, "Update employee success", employee);
});

const getEmployee = controllerHandler(async (req: Request, res: Response) => {
  const employee = await employeeService.getEmployeeById(req.params.id);
  createResponse(res, "Get employee success", employee);
});

const getEmployeesWithPagination = controllerHandler(async (req: Request, res: Response) => {
  const employee = await employeeService.getEmployeesWithPagination(req.query);
  createResponse(res, "Get employees success", employee);
});

const deleteEmployee = controllerHandler(async (req: Request, res: Response) => {
  await employeeService.deleteEmployee(req.params.id);
  createResponse(res, "Delete employee success", null);
});
export default {
  addEmployee,
  updateEmployee,
  getEmployee,
  getEmployeesWithPagination,
  deleteEmployee,
};
