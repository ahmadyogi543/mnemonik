import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import NOTES from "../data/notes.json";

enum Mode {
  Default,
  Read,
  Write,
  Edit,
  Delete,
}

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
  setSelectedNote: (id: number) => void;

  mode: Mode;
  setModeToRead: () => void;
  setModeToWrite: () => void;
  setModeToEdit: () => void;
  setModeToDelete: () => void;
};

const NoteContext = createContext<NoteContextProps | null>(null);

export const NoteContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // note stuff
  const [note, setNote] = useState<Note | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);

  const setSelectedNote = (id: number) => {
    const note = notes.find((note) => note.id === id);
    if (!note) {
      throw new Error(`failed to find note with id ${id}`);
    }

    setNote(note);
  };

  // mode stuff
  const [mode, setMode] = useState<Mode>(Mode.Default);

  const setModeToRead = () => setMode(Mode.Read);
  const setModeToWrite = () => setMode(Mode.Write);
  const setModeToEdit = () => setMode(Mode.Edit);
  const setModeToDelete = () => setMode(Mode.Delete);

  useEffect(() => {
    // TODO: this will get it's stuff from API
    const notes: Note[] = NOTES.map((note) => ({
      id: note.id,
      title: note.title,
      body: note.body,
      createdAt: note.created_at,
      updatedAt: note.updated_at,
    }));

    setNotes(notes);
  }, []);

  return (
    <NoteContext.Provider
      value={{
        note,
        notes,
        setSelectedNote,

        mode,
        setModeToRead,
        setModeToWrite,
        setModeToEdit,
        setModeToDelete,
      }}
    >
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
