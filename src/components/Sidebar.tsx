import AddNoteButton from "./sidebar/AddNoteButton";
import NoteItem from "./sidebar/NoteItem";
import Searchbar from "./sidebar/Searchbar";

const Sidebar = () => {
  return (
    <>
      <div className="flex-none">
        <Searchbar />
      </div>
      <div className="flex flex-col flex-grow overflow-y-auto gap-4">
        <NoteItem />
        <NoteItem />
      </div>
      <div className="flex-none flex">
        <AddNoteButton />
      </div>
    </>
  );
};

export default Sidebar;
