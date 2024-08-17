import { Request, Response } from "express";

export function sendOKJSON(data: any, message: string, res: Response) {
  res.json({
    status: "success",
    message,
    data,
  });
}

export function sendInternalServerErrorJSON(
  error: Error,
  req: Request,
  res: Response
) {
  res.status(500).json({
    status: "error",
    message: "interval server error",
  });
  console.error(error);
}
