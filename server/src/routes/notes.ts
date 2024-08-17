import express from "express";

import { createNoteHandler } from "../handlers/createNoteHandler";
import { deleteNoteHandler } from "../handlers/deleteNoteHandler";
import { getNoteHandler } from "../handlers/getNoteHandler";
import { getNotesHandler } from "../handlers/getNotesHandler";
import { updateNoteHandler } from "../handlers/updateNoteHandler";

export const notesRouter = express.Router();

// get all notes
notesRouter.get("/", getNotesHandler);

// create new note
notesRouter.post("/", createNoteHandler);

// get specific note with id
notesRouter.get("/:id", getNoteHandler);

// update specific note with id
notesRouter.patch("/:id", updateNoteHandler);

// delete specific note with id
notesRouter.delete("/:id", deleteNoteHandler);
