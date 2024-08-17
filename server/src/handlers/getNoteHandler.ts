import { Request, Response } from "express";

export function getNoteHandler(req: Request, res: Response) {
  const id = req.params.id;

  res.send({
    message: `get a note with id: ${id}`,
  });
}
