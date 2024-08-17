import { Request, Response } from "express";

import { getNote } from "../models/notesModel";
import {
  sendBadRequestJSON,
  sendInternalServerErrorJSON,
  sendNotFoundJSON,
  sendOKJSON,
} from "../helpers/responseSender";

type GetNoteParams = {
  id: string;
};

export function getNoteHandler(
  req: Request<GetNoteParams, {}, {}>,
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

  const result = getNote(id);
  if (result.error) {
    sendInternalServerErrorJSON(result.error, res);
    return;
  }
  if (!result.note) {
    sendNotFoundJSON(`cannot find note with id: ${id}`, res);
    return;
  }

  sendOKJSON(result.note, "note retrieved successfully", res);
}
