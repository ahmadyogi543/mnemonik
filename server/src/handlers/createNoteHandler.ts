import { Request, Response } from "express";
import { CreateNoteData } from "./types";

import { addNote } from "../models/notes/addNote";
import {
  sendBadRequestJSON,
  sendCreatedJSON,
  sendInternalServerErrorJSON,
} from "../helpers/responseSender";
import { validateNoteContent } from "../helpers/validator";

export function createNoteHandler(
  req: Request<{}, {}, CreateNoteData>,
  res: Response
) {
  const { title, body } = req.body;
  const [valid, message] = validateNoteContent(title, body);
  if (!valid) {
    sendBadRequestJSON(message, res);
    return;
  }

  const result = addNote(title!, body!);
  if (result.error) {
    sendInternalServerErrorJSON(result.error, res);
    return;
  }

  sendCreatedJSON(result.note, "note retrieved successfully", res);
}
