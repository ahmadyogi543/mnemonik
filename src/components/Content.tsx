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
    if (mode.data === AppMode.View) {
      const note = notes.data.find((note) => note.id === mode.noteId);
      if (!note) {
        throw new Error(`error: failed to find note with id: ${mode.noteId}`);
      }

      setNoteContent(note.title, note.body);
    } else if (mode.data === AppMode.Create) {
      clearNoteContent();

      if (!titleRef.current) return;
      titleRef.current.focus();
    } else if (mode.data === AppMode.Add) {
      const ok = confirm("Apakah kamu yakin untuk menyimpan catatan ini?");
      if (!ok) return;

      const note = addNote(title, body);

      notes.dispatch({
        type: "ADD",
        payload: {
          note,
        },
      });

      mode.dispatch({ type: "VIEW", payload: { id: note.id } });
    } else if (mode.data === AppMode.Edit) {
      if (!bodyRef.current) return;

      const length = bodyRef.current.value.length;
      bodyRef.current.setSelectionRange(length, length);
      bodyRef.current.focus();
    } else if (mode.data === AppMode.Update) {
      const ok = confirm("Apakah kamu yakin untuk memperbaharui catatan ini?");
      if (!ok) return;

      const id = mode.noteId;
      const payload = updateNote(id, title, body);
      notes.dispatch({
        type: "UPDATE",
        payload,
      });

      mode.dispatch({ type: "VIEW", payload: { id } });
    }
  }, [mode]);

  return (
    <div className="flex flex-col flex-grow bg-white border border-gray-300">
      <input
        type="text"
        className="block focus:outline-none block font-bold text-3xl mx-8 mt-8"
        onChange={(ev) => setTitle(ev.target.value)}
        placeholder="Judul..."
        readOnly={mode.data === AppMode.View}
        ref={titleRef}
        value={title}
      />

      {mode.data === AppMode.Edit && (
        <p className="mx-8 mt-2 text-gray-700 text-sm italic">{"[edit]"}</p>
      )}
      <textarea
        className={`focus:outline-none resize-none flex-grow block p-8`}
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
