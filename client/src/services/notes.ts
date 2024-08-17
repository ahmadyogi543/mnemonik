import React from "react";

import { Note } from "../types";
import { NotesReducerAction } from "../reducers/types";

export async function getNotes(dispatch: React.Dispatch<NotesReducerAction>) {
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
    dispatch({ type: "SET", payload: { notes } });
  } catch (error) {
    console.error(error);
  }
}

export function addNote(title: string, body: string) {
  const now = new Date();

  return {
    id: Math.floor(Math.random() * (1000 - 0 + 1)) + 0,
    title: title,
    body: body,
    createdAt: now,
    updatedAt: now,
  };
}

export function updateNote(id: number, title: string, body: string) {
  const now = new Date();

  return {
    id,
    title,
    body,
    updatedAt: now,
  };
}
