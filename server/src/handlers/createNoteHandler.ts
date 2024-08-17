import { Request, Response } from "express";

export function createNoteHandler(req: Request, res: Response) {
  res.send({
    message: "create a new note",
  });
}
