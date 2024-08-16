import AddNoteButton from "./sidebar/AddNoteButton";
import NoteItem from "./sidebar/NoteItem";
import Searchbar from "./sidebar/Searchbar";

import { useNoteContext } from "../context/NoteContext";

const Sidebar = () => {
  const { notes } = useNoteContext();

  return (
    <>
      <div className="flex-none">
        <Searchbar />
      </div>
      <div className="flex flex-col flex-grow overflow-y-auto gap-2">
        {notes.length !== 0 ? (
          notes.map((note) => (
            <NoteItem
              key={`note-item-${note.id}`}
              id={note.id}
              title={note.title}
              body={note.body}
              updatedAt={note.updatedAt}
            />
          ))
        ) : (
          <p className="mt-4 text-sm text-center text-gray-500">
            Tidak terdapat catatan apapun...
          </p>
        )}
      </div>
      <div className="flex flex-none">
        <AddNoteButton />
      </div>
    </>
  );
};

export default Sidebar;
