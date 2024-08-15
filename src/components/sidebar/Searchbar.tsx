import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="flex gap-2 mb-4">
      <input
        className="flex-grow focus:outline-none block px-4 py-2 rounded-lg border border-zinc-800 text-sm"
        placeholder="Cari catatan berdasarkan judul..."
        type="text"
        name=""
        id=""
      />
      <button className="block px-3 rounded-lg bg-zinc-800 text-white text-sm">
        <FaSearch />
      </button>
    </div>
  );
};

export default Searchbar;
