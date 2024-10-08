import React from "react";

import { AddNoteData } from "../types";
import { config } from "../../constant/config";
import { ModeReducerAction, NotesReducerAction } from "../../reducers/types";
import { Note } from "../../types";

export async function addNote(
  title: string,
  body: string,
  notesDispatch: React.Dispatch<NotesReducerAction>,
  modeDispatch: React.Dispatch<ModeReducerAction>
) {
  const url = `${config.API_URL}/notes`;

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
      alert("Kesalahan: maaf terjadi gangguan pada sistem");
      console.error(result.message);
      return;
    }

    const data: AddNoteData = result.data;
    const note: Note = {
      id: data.id,
      title: data.title,
      body: data.body,
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt),
    };

    notesDispatch({ type: "ADD", payload: { note } });
    modeDispatch({ type: "VIEW", payload: { id: note.id } });
  } catch (error) {
    console.error(error);
  }
}
