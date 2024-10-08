import React from "react";

import { config } from "../../constant/config";
import { ModeReducerAction, NotesReducerAction } from "../../reducers/types";

export async function deleteNote(
  id: number,
  notesDispatch: React.Dispatch<NotesReducerAction>,
  modeDispatch: React.Dispatch<ModeReducerAction>
) {
  const url = `${config.API_URL}/notes/${id}`;

  try {
    const resp = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!resp) {
      throw new Error(`error: failed to fetch ${url}`);
    }

    if (resp.status !== 204) {
      alert("Kesalahan: maaf terjadi gangguan pada sistem");
      return;
    }

    notesDispatch({ type: "DELETE", payload: { id } });
    modeDispatch({ type: "DEFAULT" });
  } catch (error) {
    console.error(error);
  }
}
