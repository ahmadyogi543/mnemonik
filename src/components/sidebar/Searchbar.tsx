import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="flex gap-2">
      <input
        className="flex-grow focus:outline-none block px-4 py-2 border border-gray-300 text-sm"
        placeholder="Cari catatan berdasarkan judul..."
        type="text"
        name=""
        id=""
      />
      <button className="block px-3 bg-zinc-800 hover:bg-zinc-700 text-white text-sm">
        <FaSearch />
      </button>
    </div>
  );
};

export default Searchbar;
