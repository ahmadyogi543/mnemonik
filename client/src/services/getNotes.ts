import React from "react";

import { Note } from "../types";
import { NotesReducerAction } from "../reducers/types";

export async function getNotes(
  notesDispatch: React.Dispatch<NotesReducerAction>
) {
  const url = "http://localhost:5000/api/notes";

  try {
    const resp = await fetch(url);
    if (!resp) {
      throw new Error(`error: failed to fetch ${url}`);
    }

    const result = await resp.json();
    if (result.status !== "success") {
      console.error(result.message);
      return;
    }

    const notes: Note[] = result.data;
    notesDispatch({ type: "SET", payload: { notes } });
  } catch (error) {
    console.error(error);
  }
}
