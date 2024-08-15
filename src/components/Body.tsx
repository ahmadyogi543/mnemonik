import Content from "./Content";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex flex-grow overflow-hidden bg-slate-200">
      <div className="w-4/12 overflow-y-auto">
        <Sidebar />
      </div>
      <div className="flex-grow bg-white overflow-y-auto">
        <Content />
      </div>
    </div>
  );
};

export default Body;
