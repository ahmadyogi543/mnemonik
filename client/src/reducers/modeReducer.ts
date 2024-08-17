import { AppMode } from "../constant/app-mode";
import { ModeReducerState, ModeReducerAction } from "./types";

export function modeReducer(
  state: ModeReducerState,
  action: ModeReducerAction
): ModeReducerState {
  switch (action.type) {
    case "DEFAULT":
      return { ...state, data: AppMode.Default };
    case "VIEW":
      return { ...state, data: AppMode.View, noteId: action.payload.id };
    case "CREATE":
      return { ...state, data: AppMode.Create };
    case "ADD":
      return { ...state, data: AppMode.Add };
    case "EDIT":
      return { ...state, data: AppMode.Edit };
    case "UPDATE":
      return { ...state, data: AppMode.Update };
    case "DELETE":
      return { ...state, data: AppMode.Delete };
    case "DESTROY":
      return { ...state, data: AppMode.Destroy, noteId: action.payload.id };
    case "RESET_NOTE_ID":
      return { ...state, noteId: -1 };
    default:
      throw new Error(`error: unknown action type`);
  }
}
