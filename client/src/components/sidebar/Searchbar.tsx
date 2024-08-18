import React, { useEffect, useState } from "react";
import { FaTimes, FaSearch } from "react-icons/fa";

import { useAppContext } from "../../context/AppContext";
import { getNotes } from "../../services/getNotes";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const { mode, notes, status } = useAppContext();

  const handleOnClickBtn = () => {
    setQuery("");
  };

  useEffect(() => {
    if (status.loading) return;

    mode.dispatch({ type: "DEFAULT" });
    mode.dispatch({ type: "RESET_NOTE_ID" });

    if (query === "") {
      getNotes(notes.dispatch, () => {});
      return;
    }

    const handler = setTimeout(() => {
      const filteredNotes = notes.data.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      );
      notes.dispatch({ type: "SET", payload: { notes: filteredNotes } });
    }, 500);

    return () => clearTimeout(handler);
  }, [query, status.loading]);

  return (
    <div className="flex gap-2">
      <input
        className="flex-grow focus:outline-none block px-4 py-2 border border-gray-300 text-sm"
        placeholder="Cari catatan berdasarkan judul..."
        type="text"
        onChange={(ev) => setQuery(ev.target.value)}
        value={query}
      />
      <button
        className="block px-3 bg-zinc-800 hover:bg-zinc-700 text-white text-sm"
        onClick={handleOnClickBtn}
      >
        {query === "" ? <FaSearch /> : <FaTimes />}
      </button>
    </div>
  );
};

export default Searchbar;
