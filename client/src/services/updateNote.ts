import React from "react";

import { Note } from "../types";
import { ModeReducerAction, NotesReducerAction } from "../reducers/types";

export async function updateNote(
  id: number,
  title: string,
  body: string,
  notesDispatch: React.Dispatch<NotesReducerAction>,
  modeDispatch: React.Dispatch<ModeReducerAction>
) {
  const url = `http://localhost:5000/api/notes/${id}`;

  try {
    const resp = await fetch(url, {
      method: "PUT",
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
    notesDispatch({
      type: "UPDATE",
      payload: {
        id: note.id,
        title: note.title,
        body: note.body,
        updatedAt: note.updatedAt,
      },
    });

    modeDispatch({ type: "VIEW", payload: { id: note.id } });
  } catch (error) {
    console.error(error);
  }
}
