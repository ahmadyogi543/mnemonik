import { Request, Response } from "express";

import {
  sendBadRequestJSON,
  sendInternalServerErrorJSON,
  sendOKJSON,
} from "../helpers/responseSender";
import { destroyNote } from "../models/notesModel";

export function deleteNoteHandler(req: Request, res: Response) {
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

  sendOKJSON(null, `delete a note with id: ${id} successfully`, res);
}
