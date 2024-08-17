import { Request, Response } from "express";

import { getNotes } from "../models/notesModel";
import { handleInternalServerError } from "../helpers/handleError";

export function getNotesHandler(req: Request, res: Response) {
  const result = getNotes();

  if (result.error) {
    handleInternalServerError(result.error, req, res);
    return;
  }

  res.json({
    status: "success",
    message: "notes retrieved successfully",
    data: result.notes,
  });
}
