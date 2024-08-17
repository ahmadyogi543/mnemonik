import { useState } from "react";
import { FaTimes, FaSearch } from "react-icons/fa";

const Searchbar = () => {
  const [query, setQuery] = useState("");

  const handleOnClickBtn = () => {
    setQuery("");
  };

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
