import Content from "./Content";
// import EmptyContent from "./EmptyContent";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex flex-grow gap-4 p-4 overflow-hidden bg-gray-200">
      <div className="w-4/12 flex flex-col gap-4">
        <Sidebar />
      </div>
      <div className="flex flex-grow overflow-y-auto">
        {/* <EmptyContent /> */}
        <Content />
      </div>
    </div>
  );
};

export default Body;
