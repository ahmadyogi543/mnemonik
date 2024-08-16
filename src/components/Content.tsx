import ContentButton from "./ContentButton";

const Content = () => {
  return (
    <div className="flex flex-col flex-grow bg-white border border-gray-300">
      <input
        type="text"
        className="focus:outline-none block font-bold text-3xl m-8"
        placeholder="Judul..."
        readOnly
      />
      <textarea
        className="focus:outline-none resize-none flex-grow block p-8"
        placeholder="Konten..."
        readOnly
      ></textarea>
      <ContentButton onClick={() => {}} />
    </div>
  );
};

export default Content;
