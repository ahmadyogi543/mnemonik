import { db } from "../../data/db";

import { DestroyNoteProps } from "../types";

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
