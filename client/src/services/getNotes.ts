import React from "react";

import { Note } from "../types";
import { GetNotesData } from "./types";
import { NotesReducerAction } from "../reducers/types";

export async function getNotes(
  notesDispatch: React.Dispatch<NotesReducerAction>,
  callback: () => void
) {
  const url = "http://localhost:5000/api/notes";

  const resp = await fetch(url);
  if (!resp) {
    throw new Error(`error: failed to fetch ${url}`);
  }

  const result = await resp.json();
  if (result.status !== "success") {
    console.error(result.message);
    return;
  }

  const data: GetNotesData[] = result.data;
  const notes: Note[] = data.map((note) => ({
    id: note.id,
    title: note.title,
    body: note.body,
    createdAt: new Date(note.createdAt),
    updatedAt: new Date(note.updatedAt),
  }));
  notesDispatch({ type: "SET", payload: { notes } });

  callback();
}
