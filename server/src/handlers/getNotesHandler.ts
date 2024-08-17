import { Request, Response } from "express";

import { getNotes } from "../models/notesModel";
import {
  sendInternalServerErrorJSON,
  sendOKJSON,
} from "../helpers/responseSender";

export function getNotesHandler(req: Request, res: Response) {
  const result = getNotes();

  if (result.error) {
    sendInternalServerErrorJSON(result.error, res);
    return;
  }

  sendOKJSON(result.notes, "notes retrieved successfully", res);
}
