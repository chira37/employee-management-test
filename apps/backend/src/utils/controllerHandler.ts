import { NextFunction, Request, Response } from "express";

export const controllerHandler = (fn: any) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next))
    .then(() => {})
    .catch((err) => {
      next(err);
    });
};
