import { FaPlus } from "react-icons/fa";

const AddNoteButton = () => {
  return (
    <button className="flex items-center justify-center flex-grow p-4 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium">
      <FaPlus className="me-4" />
      <span className="font-bold">Tambah Catatan Baru</span>
    </button>
  );
};

export default AddNoteButton;
