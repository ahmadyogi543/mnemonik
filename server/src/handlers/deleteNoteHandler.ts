import { Request, Response } from "express";

import { destroyNote } from "../models/notesModel";
import {
  sendBadRequestJSON,
  sendInternalServerErrorJSON,
  sendNoContentJSON,
} from "../helpers/responseSender";

type DeleteNoteParams = {
  id: string;
};

export function deleteNoteHandler(
  req: Request<DeleteNoteParams, {}, {}>,
  res: Response
) {
  const id = parseInt(req.params.id);
  if (Number.isNaN(id)) {
    sendBadRequestJSON("invalid id format, should be numeric", res);
    return;
  }
  if (id <= 0) {
    sendBadRequestJSON("invalid id, should be greater than 0", res);
    return;
  }

  const result = destroyNote(id);
  if (result.error) {
    sendInternalServerErrorJSON(result.error, res);
    return;
  }
  if (result.status !== "success") {
    sendBadRequestJSON(`a note with id ${id} is not exists`, res);
    return;
  }

  sendNoContentJSON(res);
}
