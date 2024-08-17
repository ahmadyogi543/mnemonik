import db from "../data/db";

import { Note, GetNotesProps, GetNoteProps, CreateNoteProps } from "./types";

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

export function createNote(title: string, body: string): CreateNoteProps {
  try {
    const now = JSON.stringify(new Date());

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

export function updateNote() {}

export function destroyNote() {}
