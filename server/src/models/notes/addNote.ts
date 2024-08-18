import { db } from "../../data/db";
import { formatDateForTimestamp } from "../../helpers";

import { Note } from "../types";
import { CreateNoteProps } from "../types";

export function addNote(title: string, body: string): CreateNoteProps {
  try {
    const now = formatDateForTimestamp(new Date());

    const stmt = db.prepare(
      `
      INSERT INTO notes (title, body, createdAt, updatedAt)
      VALUES (?, ?, ?, ?)
    `.trim()
    );
    const result = stmt.run(title, body, now, now);

    const id = result.lastInsertRowid;
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
