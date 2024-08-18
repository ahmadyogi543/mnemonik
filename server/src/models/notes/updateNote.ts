import { db } from "../../data/db";
import { formatDateForTimestamp } from "../../helpers";

import { Note } from "../types";
import { UpdateNoteProps } from "../types";

export function updateNote(
  id: number,
  title: string,
  body: string
): UpdateNoteProps {
  try {
    const now = formatDateForTimestamp(new Date());

    const stmt = db.prepare(
      "UPDATE notes SET title = ?, body = ?, updatedAt = ? WHERE id = ?"
    );
    const result = stmt.run(title, body, now, id);
    if (result.changes === 0) {
      return {
        note: undefined,
        error: null,
      };
    }

    const row = db.prepare("SELECT * FROM notes WHERE id = ?").get(id);
    return {
      note: row as Note,
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
