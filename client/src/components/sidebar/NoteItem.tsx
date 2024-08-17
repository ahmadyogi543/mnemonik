import React, { useEffect, useRef } from "react";
import { FaClone, FaTrashAlt } from "react-icons/fa";

import { AppMode } from "../../constant/app-mode";
import { formatDate } from "../../utils";
import { useAppContext } from "../../context/AppContext";

type NoteItemProps = {
  id: number;
  title: string;
  body: string;
  updatedAt: Date;
  active?: boolean;
};

const TEXT_LIMIT = 256;

const NoteItem: React.FC<NoteItemProps> = ({ id, title, body, updatedAt }) => {
  const { mode, notes } = useAppContext();
  const ref = useRef<HTMLDivElement>(null);

  const handleOnClickNote = () => {
    if (id === mode.noteId) return;

    if (mode.data === AppMode.Edit) {
      const ok = confirm("Apakah kamu yakin untuk batal mengedit catatan ini?");
      if (!ok) return;
    }

    mode.dispatch({
      type: "VIEW",
      payload: {
        id,
      },
    });
  };

  const handleOnClickCloneBtn = () => {};

  const handleOnClickDeleteBtn = () => {
    if (id !== mode.noteId) return;

    const ok = confirm("Apakah kamu yakin untuk menghapus catatan ini?");
    if (!ok) return;

    notes.dispatch({ type: "DELETE", payload: { id } });
    mode.dispatch({ type: "DEFAULT" });
  };

  useEffect(() => {
    if (id !== mode.noteId) return;
    if (!ref.current) return;

    ref.current.scrollIntoView({ behavior: "smooth" });
  }, [mode]);

  return (
    <div
      className={`p-4 bg-white border cursor-pointer hover:border-zinc-800 ${
        id === mode.noteId ? "border-zinc-800" : "border-gray-300"
      }`}
      onClick={handleOnClickNote}
      ref={ref}
    >
      <div className="flex justify-between items-center mb-4 text-zinc-800">
        <h3 className="font-bold">{title}</h3>
        <div className="flex gap-2">
          <FaClone
            className={`block cursor-pointer ${
              id === mode.noteId ? "hover:text-zinc-600" : "text-gray-400"
            }`}
            onClick={handleOnClickCloneBtn}
            title={id === mode.noteId ? "Salin" : ""}
          />
          <FaTrashAlt
            className={`block cursor-pointer ${
              id === mode.noteId ? "hover:text-zinc-600" : "text-gray-400"
            }`}
            onClick={handleOnClickDeleteBtn}
            title={id === mode.noteId ? "Hapus" : ""}
          />
        </div>
      </div>
      <p className="text-sm text-gray-700">
        {body.length > TEXT_LIMIT ? body.slice(0, TEXT_LIMIT) + "..." : body}
      </p>
      <p className="mt-4 text-xs text-end italic text-gray-700">
        {formatDate(updatedAt)}
      </p>
    </div>
  );
};

export default NoteItem;
