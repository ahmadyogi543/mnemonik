import { Request, Response } from "express";

import { getNote } from "../models/notesModel";
import {
  sendBadRequestJSON,
  sendInternalServerErrorJSON,
  sendNotFoundJSON,
  sendOKJSON,
} from "../helpers/responseSender";
import { validateIdParam } from "../helpers/validator";

type GetNoteParams = {
  id: string;
};

export function getNoteHandler(
  req: Request<GetNoteParams, {}, {}>,
  res: Response
) {
  const id = parseInt(req.params.id);

  const [valid, message] = validateIdParam(id);
  if (!valid) {
    sendBadRequestJSON(message, res);
    return;
  }

  const result = getNote(id);
  if (result.error) {
    sendInternalServerErrorJSON(result.error, res);
    return;
  }
  if (!result.note) {
    sendNotFoundJSON(`cannot find a note with id ${id}`, res);
    return;
  }

  sendOKJSON(result.note, "note retrieved successfully", res);
}
