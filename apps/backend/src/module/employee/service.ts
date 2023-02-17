/* eslint-disable import/no-anonymous-default-export */
import httpStatus from "http-status";
import { Employee } from "./type";
import EmployeeModel from "./models/employee";
import ApiError from "../../utils/ApiError";
import { getSort } from "../../utils/getSort";

const addEmployee = async (employeeBody: Employee) => {
  const employee = new EmployeeModel(employeeBody);
  return await employee.save();
};

const updateEmployee = async (id: string, employeeBody: Employee) => {
  const employee = await EmployeeModel.findByIdAndUpdate(id, employeeBody);
  if (!employee) throw new ApiError("Employee not found", httpStatus.NOT_FOUND, null);
  return employee;
};

const getEmployeeById = async (id: string) => {
  const employee = await EmployeeModel.findById(id);
  if (!employee) throw new ApiError("Employee not found", httpStatus.NOT_FOUND, null);
  return employee;
};

const getEmployeesWithPagination = async (query: any) => {
  const { sort, page = 1, limit = 5 } = query;
  const options = {
    page,
    limit,
    sort: getSort(sort),
  };
  const { docs, totalPages, page: currentPage } = await EmployeeModel.paginate({}, options);

  return {
    employees: docs,
    pagination: { page: currentPage, totalPages },
  };
};

const deleteEmployee = async (id: string) => {
  const employee = await EmployeeModel.findByIdAndDelete(id);
  if (!employee) throw new ApiError("Employee not found", httpStatus.NOT_FOUND, null);
  return employee;
};

export default {
  addEmployee,
  updateEmployee,
  getEmployeeById,
  getEmployeesWithPagination,
  deleteEmployee,
};
