import { FaPlus } from "react-icons/fa";

import { AppMode } from "../../constant/app-mode";
import { useAppContext } from "../../context/AppContext";

const AddNoteButton = () => {
  const { mode } = useAppContext();

  const handleOnClick = () => {
    if (mode.data === AppMode.Edit) {
      const ok = confirm("Apakah kamu yakin untuk batal mengedit catatan ini?");
      if (!ok) return;
    }

    mode.dispatch({
      type: "CREATE",
    });
    mode.dispatch({
      type: "RESET_NOTE_ID",
    });
  };

  return (
    <button
      className="flex items-center justify-center flex-grow p-4 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium shadow-lg"
      onClick={handleOnClick}
    >
      <FaPlus className="me-4" />
      <span className="font-bold">Tambah Catatan Baru</span>
    </button>
  );
};

export default AddNoteButton;
