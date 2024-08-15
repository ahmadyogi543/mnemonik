import NoteItem from "./sidebar/NoteItem";

const Sidebar = () => {
  return (
    <div className="m-4">
      <div className="mb-4">SEARCH BAR</div>
      <div className="flex flex-col gap-2">
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
      </div>
    </div>
  );
};

export default Sidebar;
