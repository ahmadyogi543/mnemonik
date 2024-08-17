import { NotesReducerState, NotesReducerAction } from "./types";

export function notesReducer(
  state: NotesReducerState,
  action: NotesReducerAction
): NotesReducerState {
  switch (action.type) {
    case "SET":
      return { ...state, data: action.payload.notes };
    case "ADD":
      return { ...state, data: [...state.data, action.payload.note] };
    case "UPDATE":
      const { id, title, body } = action.payload;
      return {
        ...state,
        data: state.data.map((note) =>
          note.id === id ? { ...note, title, body } : note
        ),
      };
    case "DELETE":
      return {
        ...state,
        data: state.data.filter((note) => note.id !== action.payload.id),
      };
    default:
      throw new Error(`error: unknown action type`);
  }
}
