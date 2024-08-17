import { Request, Response } from "express";

export function deleteNoteHandler(req: Request, res: Response) {
  const id = req.params.id;

  res.send({
    message: `delete a note with id: ${id}`,
  });
}
