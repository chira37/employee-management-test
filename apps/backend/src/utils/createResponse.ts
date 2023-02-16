import { Response } from "express";
import httpStatus from "http-status";

export const createResponse = (res: Response, message: string, data: any) => {
  res.status(httpStatus.OK).json({ message, data });
};
