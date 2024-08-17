import db from "../data/db";
import { formatDateForTimestamp } from "../helpers/formatDateTimestamp";

import {
  Note,
  GetNotesProps,
  GetNoteProps,
  CreateNoteProps,
  DestroyNoteProps,
  UpdateNoteProps,
} from "./types";

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

export function destroyNote(id: number): DestroyNoteProps {
  try {
    const result = db.prepare("DELETE FROM notes WHERE id = ?").run(id);
    return {
      status: result.changes === 0 ? "failed" : "success",
      error: null,
    };
  } catch (err) {
    const error = err as Error;

    return {
      status: "failed",
      error,
    };
  }
}
