import AddNoteButton from "./sidebar/AddNoteButton";
import NoteItem from "./sidebar/NoteItem";
import Searchbar from "./sidebar/Searchbar";

import NOTES from "../data/notes.json";

const Sidebar = () => {
  return (
    <>
      <div className="flex-none">
        <Searchbar />
      </div>
      <div className="flex flex-col flex-grow overflow-y-auto gap-2">
        {NOTES.map((note) => (
          <NoteItem
            key={note.id}
            title={note.title}
            body={note.body}
            updatedAt={note.updated_at}
          />
        ))}
      </div>
      <div className="flex flex-none">
        <AddNoteButton />
      </div>
    </>
  );
};

export default Sidebar;
