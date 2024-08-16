import React, { createContext, ReactNode, useContext } from "react";

type Note = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
};

type NoteContextProps = {
  note: Note | null;
  notes: Note[];
};

const NoteContext = createContext<NoteContextProps>({ note: null, notes: [] });

export const NoteContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <NoteContext.Provider value={{ note: null, notes: [] }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("UseNoteContext must be used within a NoteContextProvider");
  }

  return context;
};
