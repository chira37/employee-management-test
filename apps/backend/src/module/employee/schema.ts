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
    firstName: Joi.string().min(4).max(10).required(),
    lastName: Joi.string().min(4).max(10).required(),
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
  deleteEmployee,
};
