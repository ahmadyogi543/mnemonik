import React, { createContext, ReactNode, useContext } from "react";

type Note = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
};

type NoteContextProps = {
  notes: Note[];
};

const NoteContext = createContext<NoteContextProps>({ notes: [] });

export const NoteContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <NoteContext.Provider value={{ notes: [] }}>
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
