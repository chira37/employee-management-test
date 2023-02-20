/* eslint-disable import/no-anonymous-default-export */
import Joi from "joi";

const addEmployee = Joi.object({
  body: Joi.object({
    firstName: Joi.string().min(6).max(10).required(),
    lastName: Joi.string().min(6).max(10).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    gender: Joi.string().valid("m", "f").required(),
  }),
  query: Joi.optional(),
  params: Joi.optional(),
});

const updateEmployee = Joi.object({
  body: Joi.object({
    firstName: Joi.string().min(6).max(10).required(),
    lastName: Joi.string().min(6).max(10).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    gender: Joi.string().valid("m", "f").required(),
  }),
  query: Joi.optional(),
  params: Joi.object({
    id: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required()
      .messages({ "string.pattern.base": "Invalid employee id" }),
  }),
});

const getEmployee = Joi.object({
  body: Joi.optional(),
  query: Joi.optional(),
  params: Joi.object({
    id: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required()
      .messages({ "string.pattern.base": "Invalid employee id" }),
  }),
});

const getEmployees = Joi.object({
  body: Joi.optional(),
  query: Joi.object({
    firstName: Joi.string().allow(""),
    lastName: Joi.string().allow(""),
    email: Joi.string().allow(""),
    phone: Joi.string().allow(""),
    gender: Joi.string().valid("m", "f").allow(""),
    sort: Joi.string().allow(""),
    page: Joi.number().required(),
    limit: Joi.number().required(),
  }),
  params: Joi.optional(),
});

const deleteEmployee = Joi.object({
  body: Joi.optional(),
  query: Joi.optional(),
  params: Joi.object({
    id: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required()
      .messages({ "string.pattern.base": "Invalid employee id" }),
  }),
});
export default {
  addEmployee,
  updateEmployee,
  getEmployee,
  getEmployees,
  deleteEmployee,
};
