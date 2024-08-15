import { FaPlus } from "react-icons/fa";

const AddNoteButton = () => {
  return (
    <button className="flex items-center justify-center flex-grow p-4 bg-zinc-800 text-white text-sm font-medium">
      <FaPlus className="me-4" />
      <span>Tambah Catatan Baru</span>
    </button>
  );
};

export default AddNoteButton;
