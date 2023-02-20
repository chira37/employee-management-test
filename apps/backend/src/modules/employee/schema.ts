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
    id: Joi.string().required(),
  }),
});

const getEmployee = Joi.object({
  body: Joi.optional(),
  query: Joi.optional(),
  params: Joi.object({
    id: Joi.string().required(),
  }),
});

const getEmployees = Joi.object({
  body: Joi.optional(),
  query: Joi.object({
    firstName: Joi.string().allow(""),
    lastName: Joi.string().allow(""),
    email: Joi.string().allow(""),
    phone: Joi.string().allow(""),
    age: Joi.number().allow(""),
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
    id: Joi.string().required(),
  }),
});
export default {
  addEmployee,
  updateEmployee,
  getEmployee,
  getEmployees,
  deleteEmployee,
};
