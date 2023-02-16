import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { ErrorType } from "../types";
import ApiError from "../utils/ApiError";

const errorHandler = (error: ErrorType, _request: Request, response: Response, _next: NextFunction): void => {
  console.log(error);

  if (error instanceof ApiError) {
    response.status(error.statusCode);
    response.json({ success: false, message: error.message, data: error.data });
  } else {
    response.status(httpStatus.INTERNAL_SERVER_ERROR);
    response.json({ success: false, message: "Server error", data: {} });
  }
};

export default errorHandler;
