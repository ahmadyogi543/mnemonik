import express from "express";

import { createNoteHandler } from "../handlers/createNoteHandler";
import { deleteNoteHandler } from "../handlers/deleteNoteHandler";
import { editNoteHandler } from "../handlers/editNoteHandler";
import { getNoteHandler } from "../handlers/getNoteHandler";
import { getNotesHandler } from "../handlers/getNotesHandler";

export const notesRouter = express.Router();

// get all notes
notesRouter.get("/", getNotesHandler);

// create new note
notesRouter.post("/", createNoteHandler);

// get specific note with id
notesRouter.get("/:id", getNoteHandler);

// update specific note with id
notesRouter.put("/:id", editNoteHandler);

// delete specific note with id
notesRouter.delete("/:id", deleteNoteHandler);
