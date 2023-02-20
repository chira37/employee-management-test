import { ErrorRequestHandler } from "express";

export interface ErrorType extends ErrorRequestHandler {
  statusCode: number;
  data: any;
  message: string;
}
