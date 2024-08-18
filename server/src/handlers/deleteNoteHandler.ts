import { Request, Response } from "express";
import { DeleteNoteParams } from "./types";

import { destroyNote } from "../models/notes/destroyNote";
import {
  sendBadRequestJSON,
  sendInternalServerErrorJSON,
  sendNoContentJSON,
  sendNotFoundJSON,
} from "../helpers/responseSender";
import { validateIdParam } from "../helpers/validator";

export function deleteNoteHandler(
  req: Request<DeleteNoteParams, {}, {}>,
  res: Response
) {
  const id = parseInt(req.params.id);
  const [valid, message] = validateIdParam(id);
  if (!valid) {
    sendBadRequestJSON(message, res);
    return;
  }

  const result = destroyNote(id);
  if (result.error) {
    sendInternalServerErrorJSON(result.error, res);
    return;
  }
  if (result.status !== "success") {
    sendNotFoundJSON(`a note with id ${id} is not exists`, res);
    return;
  }

  sendNoContentJSON(res);
}
