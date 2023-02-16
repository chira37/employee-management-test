import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { Schema } from "joi";
import ApiError from "../utils/ApiError";

const validator = (schema: Schema) => (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schema.validate(
    { body: req.body, query: req.query, params: req.params },
    { abortEarly: false, errors: { label: "key" } }
  );

  if (error) {
    const data = error.details.map((e) => ({ message: e.message, key: e.context?.key, path: e.path }));
    return next(new ApiError("Validation error", httpStatus.BAD_REQUEST, data));
  }
  return next();
};
export default validator;
