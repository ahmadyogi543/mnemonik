// import NotesBro from "../assets/images/notes-bro.svg";

const Content = () => {
  return (
    <div className="flex flex-col flex-grow bg-white border border-gray-300">
      <input
        type="text"
        className="focus:outline-none block font-bold text-3xl m-8"
        placeholder="Judul..."
      />
      <textarea
        className="focus:outline-none resize-none flex-grow block p-8"
        placeholder="Konten..."
      ></textarea>
      {/* <div className="flex flex-col flex-grow items-center justify-center">
          <img width={360} src={NotesBro} alt="illustration" />
        </div> */}
    </div>
  );
};

export default Content;
