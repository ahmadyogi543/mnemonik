import { Request, Response } from "express";

export function updateNoteHandler(req: Request, res: Response) {
  const id = req.params.id;

  res.send({
    message: `update a note with id: ${id}`,
  });
}
