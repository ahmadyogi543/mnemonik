import { Request, Response } from "express";

export function getNotesHandler(req: Request, res: Response) {
  res.send({
    message: "get all notes",
  });
}
