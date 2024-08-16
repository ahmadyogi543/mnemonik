import { AppMode } from "../constant/app-mode";
import { Note } from "../types";

// ++++ STATES ++++
export type ModeReducerState = {
  data: AppMode;
  noteId: number;
};

export type NotesReducerState = {
  data: Note[];
};

// ++++ ACTIONS ++++
export type ModeReducerAction =
  | {
      type: "DEFAULT";
    }
  | {
      type: "VIEW";
      payload: {
        id: number;
      };
    }
  | {
      type: "CREATE";
    }
  | {
      type: "ADD";
    }
  | {
      type: "EDIT";
    }
  | {
      type: "UPDATE";
    }
  | {
      type: "DELETE";
    }
  | {
      type: "DESTROY";
      payload: {
        id: number;
      };
    }
  | {
      type: "RESET_NOTE_ID";
    };

export type NotesReducerAction =
  | {
      type: "SET";
      payload: {
        notes: Note[];
      };
    }
  | {
      type: "ADD";
      payload: {
        note: Note;
      };
    }
  | {
      type: "UPDATE";
      payload: {
        id: number;
        title: string;
        body: string;
        updatedAt: Date;
      };
    }
  | {
      type: "DELETE";
      payload: {
        id: number;
      };
    };
