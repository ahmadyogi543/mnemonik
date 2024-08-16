import React from "react";
import { FaEdit } from "react-icons/fa";

type ContentButtonProps = {
  onClick: () => void;
};

const ContentButton: React.FC<ContentButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 bg-zinc-800 text-white p-5 m-8 rounded-full shadow-lg hover:bg-zinc-700 focus:outline-none"
    >
      <FaEdit className="text-lg" />
    </button>
  );
};

export default ContentButton;
