import { db } from "../../data/db";

import { Note } from "../types";
import { GetNotesProps } from "../types";

export function getNotes(): GetNotesProps {
  try {
    const stmt = db.prepare("SELECT * FROM notes");
    const result = stmt.all() as Note[];

    return {
      notes: result,
      error: null,
    };
  } catch (err) {
    const error = err as Error;

    return {
      notes: [],
      error,
    };
  }
}
