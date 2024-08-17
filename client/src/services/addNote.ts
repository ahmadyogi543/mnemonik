import React from "react";

import { Note } from "../types";
import { ModeReducerAction, NotesReducerAction } from "../reducers/types";

export async function addNote(
  title: string,
  body: string,
  notesDispatch: React.Dispatch<NotesReducerAction>,
  modeDispatch: React.Dispatch<ModeReducerAction>
) {
  const url = "http://localhost:5000/api/notes";

  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
      }),
    });
    if (!resp) {
      throw new Error(`error: failed to fetch ${url}`);
    }

    const result = await resp.json();
    if (result.status !== "success") {
      console.error(result.message);
      return;
    }

    const note: Note = result.data;
    notesDispatch({ type: "ADD", payload: { note } });

    modeDispatch({ type: "VIEW", payload: { id: note.id } });
  } catch (error) {
    console.error(error);
  }
}
