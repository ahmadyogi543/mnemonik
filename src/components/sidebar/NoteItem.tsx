import React from "react";
import { FaClone, FaTrashAlt } from "react-icons/fa";

type NoteItemProps = {
  title: string;
  body: string;
  updatedAt: string;
  active?: boolean;
};

const TEXT_LIMIT = 256;

const NoteItem: React.FC<NoteItemProps> = ({
  title,
  body,
  updatedAt,
  active = false,
}) => {
  return (
    <div
      className={`p-4 bg-white border ${
        active ? "border-zinc-800" : "border-gray-300"
      }`}
    >
      <div className="flex justify-between items-center mb-4 text-zinc-800">
        <h3 className="font-bold">{title}</h3>
        <div className="flex gap-2">
          <FaClone className="block cursor-pointer" title="Salin" />
          <FaTrashAlt className="block cursor-pointer" title="Hapus" />
        </div>
      </div>
      <p className="text-sm text-gray-700">
        {body.length > TEXT_LIMIT ? body.slice(0, TEXT_LIMIT) + "..." : body}
      </p>
      <p className="mt-4 text-xs text-end italic text-gray-700">{updatedAt}</p>
    </div>
  );
};

export default NoteItem;
