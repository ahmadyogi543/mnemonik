import NotesBro from "../assets/images/notes-bro.svg";

const EmptyContent = () => {
  return (
    <div className="flex flex-col flex-grow items-center justify-center">
      <img
        className="opacity-80"
        width={360}
        src={NotesBro}
        alt="illustration"
      />
    </div>
  );
};

export default EmptyContent;
