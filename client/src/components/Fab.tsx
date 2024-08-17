import { FaSave, FaEdit } from "react-icons/fa";

import { AppMode } from "../constant/app-mode";
import { useAppContext } from "../context/AppContext";

const Fab = () => {
  const { mode } = useAppContext();

  const handleOnClick = () => {
    if (mode.data === AppMode.View) {
      mode.dispatch({ type: "EDIT" });
    } else if (mode.data === AppMode.Create) {
      mode.dispatch({ type: "ADD" });
    } else if (mode.data === AppMode.Edit) {
      mode.dispatch({ type: "UPDATE" });
    }
  };

  return (
    <button
      onClick={handleOnClick}
      className="absolute bottom-8 right-8 bg-zinc-800 text-white p-5 rounded-full shadow-lg hover:bg-zinc-700 focus:outline-none"
    >
      {mode.data === AppMode.View ? (
        <FaEdit className="text-lg" />
      ) : (
        <FaSave className="text-lg" />
      )}
    </button>
  );
};

export default Fab;
