import express from "express";

import { createNoteHandler } from "../handlers/notes/createNoteHandler";
import { deleteNoteHandler } from "../handlers/notes/deleteNoteHandler";
import { editNoteHandler } from "../handlers/notes/editNoteHandler";
import { getNoteHandler } from "../handlers/notes/getNoteHandler";
import { getNotesHandler } from "../handlers/notes/getNotesHandler";

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
