import React from "react";
import { FaClone, FaEdit, FaTrashAlt } from "react-icons/fa";

type NoteItemProps = {
  active?: boolean;
};

const NoteItem: React.FC<NoteItemProps> = ({ active = false }) => {
  return (
    <div
      className={`p-4 bg-white border ${
        active ? "border-zinc-800" : "border-gray-300"
      }`}
    >
      <div className="flex justify-between items-center mb-4 text-zinc-800">
        <h3 className="font-bold">Example Note</h3>
        <div className="flex gap-2">
          <FaEdit className="block" />
          <FaClone className="block" />
          <FaTrashAlt className="block" />
        </div>
      </div>
      <p className="text-sm text-gray-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sed
        magni aperiam hic repellat eaque quis, dolore obcaecati exercitationem
        temp...
      </p>
      <p className="mt-4 text-xs text-end italic text-gray-700">
        05-20-2022 04:19 AM
      </p>
    </div>
  );
};

export default NoteItem;
