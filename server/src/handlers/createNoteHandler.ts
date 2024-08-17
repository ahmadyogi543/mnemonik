import { Request, Response } from "express";

import { addNote } from "../models/notesModel";
import {
  sendBadRequestJSON,
  sendCreatedJSON,
  sendInternalServerErrorJSON,
} from "../helpers/responseSender";
import { validateNoteContent } from "../helpers/validator";

type CreateNoteData = {
  title: string | undefined;
  body: string | undefined;
};

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
