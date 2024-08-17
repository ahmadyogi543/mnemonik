import React, { createContext, useContext, useEffect, useReducer } from "react";

import { AppContextProps } from "./types";
import { AppMode } from "../constant/app-mode";
import { modeReducer } from "../reducers/modeReducer";
import { notesReducer } from "../reducers/notesReducer";
import { getNotes } from "../services/notes";

const AppContext = createContext<AppContextProps | null>(null);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, modeDispatch] = useReducer(modeReducer, {
    data: AppMode.Default,
    noteId: 0,
  });
  const [notes, notesDispatch] = useReducer(notesReducer, { data: [] });

  useEffect(() => {
    getNotes(notesDispatch);
  }, []);

  return (
    <AppContext.Provider
      value={{
        mode: {
          data: mode.data,
          noteId: mode.noteId,
          dispatch: modeDispatch,
        },
        notes: {
          data: notes.data,
          dispatch: notesDispatch,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("UseAppContext must be used within an AppContextProvider");
  }

  return context;
};
