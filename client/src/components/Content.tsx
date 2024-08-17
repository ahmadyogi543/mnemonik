import { useEffect, useRef, useState } from "react";

import Fab from "./Fab";

import { AppMode } from "../constant/app-mode";
import { addNote, updateNote } from "../services/notes";
import { useAppContext } from "../context/AppContext";

const Content = () => {
  const { mode, notes } = useAppContext();
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const setNoteContent = (title: string, body: string) => {
    setTitle(title);
    setBody(body);
  };

  const clearNoteContent = () => {
    setTitle("");
    setBody("");
  };

  useEffect(() => {
    // VIEW -> to view the selected note from note items
    if (mode.data === AppMode.View) {
      const note = notes.data.find((note) => note.id === mode.noteId);
      if (!note) {
        throw new Error(`error: failed to find note with id: ${mode.noteId}`);
      }

      setNoteContent(note.title, note.body);
    }

    // CREATE -> clear the content (title and body)
    else if (mode.data === AppMode.Create) {
      clearNoteContent();

      if (!titleRef.current) return;
      titleRef.current.focus();
    }

    // ADD -> send the new created note to REST API
    else if (mode.data === AppMode.Add) {
      const ok = confirm("Apakah kamu yakin untuk menyimpan catatan ini?");
      if (!ok) return;

      addNote(title, body, notes.dispatch, mode.dispatch);
    }

    // EDIT -> set the focus on textarea and put the cursot at the EOF
    else if (mode.data === AppMode.Edit) {
      if (!bodyRef.current) return;

      const length = bodyRef.current.value.length;
      bodyRef.current.setSelectionRange(length, length);
      bodyRef.current.focus();
    }

    // UPDATE -> send the updated note to REST API
    else if (mode.data === AppMode.Update) {
      const ok = confirm("Apakah kamu yakin untuk memperbaharui catatan ini?");
      if (!ok) return;

      const id = mode.noteId;
      updateNote(id, title, body, notes.dispatch, mode.dispatch);
    }
  }, [mode]);

  return (
    <div className="flex flex-col relative flex-grow bg-white border border-gray-300">
      <div className="m-8">
        <input
          type="text"
          className="block w-full focus:outline-none block font-bold text-3xl mb-2"
          onChange={(ev) => setTitle(ev.target.value)}
          placeholder="Judul..."
          readOnly={mode.data === AppMode.View}
          ref={titleRef}
          value={title}
        />

        {mode.data === AppMode.Edit && (
          <p className="text-gray-700 text-sm italic">{"[edit]"}</p>
        )}
      </div>

      <textarea
        className={`focus:outline-none resize-none flex-grow block px-8 pb-8`}
        onChange={(ev) => setBody(ev.target.value)}
        placeholder="Konten..."
        readOnly={mode.data === AppMode.View}
        ref={bodyRef}
        value={body}
      ></textarea>
      <Fab />
    </div>
  );
};

export default Content;
