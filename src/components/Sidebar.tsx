import AddNoteButton from "./sidebar/AddNoteButton";
import NoteItem from "./sidebar/NoteItem";
import Searchbar from "./sidebar/Searchbar";

const Sidebar = () => {
  return (
    <>
      <div className="flex-none px-4 pt-4">
        <Searchbar />
      </div>
      <div className="flex flex-col flex-grow overflow-y-auto gap-4 px-4">
        <NoteItem />
        <NoteItem />
      </div>
      <div className="flex-none m-4 flex">
        <AddNoteButton />
      </div>
    </>
  );
};

export default Sidebar;
