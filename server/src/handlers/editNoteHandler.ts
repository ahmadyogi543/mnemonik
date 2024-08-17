import { Request, Response } from "express";

import { updateNote } from "../models/notesModel";
import {
  sendBadRequestJSON,
  sendInternalServerErrorJSON,
  sendNoContentJSON,
} from "../helpers/responseSender";

type EditNoteParams = {
  id: string;
};

type EditNoteData = {
  title: string | undefined;
  body: string | undefined;
};

export function editNoteHandler(
  req: Request<EditNoteParams, {}, EditNoteData>,
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

  const result = updateNote(id, title, body);
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
