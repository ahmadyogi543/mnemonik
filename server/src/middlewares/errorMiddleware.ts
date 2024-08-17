import { NextFunction, Response, Request } from "express";

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).json({
    error: {
      message: err.message,
      // Optionally include stack trace or other details in development mode
      // stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    },
  });
}
