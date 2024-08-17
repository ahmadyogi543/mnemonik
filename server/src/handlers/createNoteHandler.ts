import { Request, Response } from "express";

import { createNote } from "../models/notesModel";
import {
  sendBadRequestJSON,
  sendInternalServerErrorJSON,
  sendOKJSON,
} from "../helpers/responseSender";

type CreateNoteData = {
  title: string | undefined;
  body: string | undefined;
};

export function createNoteHandler(
  req: Request<{}, {}, CreateNoteData>,
  res: Response
) {
  const { title, body } = req.body;

  if (title === undefined || body === undefined) {
    sendBadRequestJSON("cannot find 'title' or 'body' field", res);
    return;
  }

  if (title.trim().length === 0 || body.trim().length === 0) {
    sendBadRequestJSON("the 'title' or 'body' field should not be empty", res);
    return;
  }

  if (title.trim().length > 32) {
    sendBadRequestJSON(
      "the 'title' field should not have more than 32 characters",
      res
    );
    return;
  }

  const result = createNote(title, body);
  if (result.error) {
    sendInternalServerErrorJSON(result.error, res);
    return;
  }

  sendOKJSON(result.note, "note retrieved successfully", res);
}
