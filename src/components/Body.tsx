import Content from "./Content";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex flex-grow overflow-hidden p-4 bg-slate-200">
      <div className="w-64 overflow-y-auto">
        <Sidebar />
      </div>
      <div className="flex-grow bg-white overflow-y-auto">
        <Content />
      </div>
    </div>
  );
};

export default Body;
