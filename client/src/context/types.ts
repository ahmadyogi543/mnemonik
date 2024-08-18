import { AppMode } from "../constant/app-mode";
import { ModeReducerAction, NotesReducerAction } from "../reducers/types";
import { Note } from "../types";

export type AppContextProps = {
  mode: {
    data: AppMode;
    noteId: number;
    dispatch: React.Dispatch<ModeReducerAction>;
  };
  notes: {
    data: Note[];
    dispatch: React.Dispatch<NotesReducerAction>;
  };
  status: {
    loading: boolean;
    error: Error | null;
  };
};
