import { db } from "../../data/db";

import { Note } from "../types";
import { GetNoteProps } from "../types";

export function getNote(id: number): GetNoteProps {
  try {
    const row = db.prepare("SELECT * FROM notes WHERE id = ?").get(id);
    return {
      note: row ? (row as Note) : undefined,
      error: null,
    };
  } catch (err) {
    const error = err as Error;

    return {
      note: undefined,
      error,
    };
  }
}
