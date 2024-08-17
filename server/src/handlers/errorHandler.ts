import { Request, Response } from "express";

export function handleBadRequest(req: Request, res: Response) {
  res.status(400).json({
    message: "bad request",
  });
}

export function handleNotFound(req: Request, res: Response) {
  res.status(404).json({
    message: "not found",
  });
}

export function handleInternalServerError(
  error: Error,
  req: Request,
  res: Response
) {
  res.status(500).json({
    message: "interval server error",
  });
  console.error(error);
}
