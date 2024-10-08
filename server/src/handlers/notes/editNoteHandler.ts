import { Request, Response } from "express";
import { EditNoteParams, EditNoteData } from "../types";

import { updateNote } from "../../models/notes/updateNote";
import {
  sendBadRequestJSON,
  sendInternalServerErrorJSON,
  sendOKJSON,
} from "../../helpers/responseSender";
import { validateIdParam, validateNoteContent } from "../../helpers/validator";

export function editNoteHandler(
  req: Request<EditNoteParams, {}, EditNoteData>,
  res: Response
) {
  const id = parseInt(req.params.id);
  let [valid, message] = validateIdParam(id);
  if (!valid) {
    sendBadRequestJSON(message, res);
    return;
  }

  const { title, body } = req.body;
  [valid, message] = validateNoteContent(title, body);
  if (!valid) {
    sendBadRequestJSON(message, res);
    return;
  }

  const result = updateNote(id, title!, body!);
  if (result.error) {
    sendInternalServerErrorJSON(result.error, res);
    return;
  }
  if (!result.note) {
    sendBadRequestJSON(`a note with id ${id} is not exists`, res);
    return;
  }

  sendOKJSON(result.note, `a note with id ${id} is updated successfully`, res);
}
