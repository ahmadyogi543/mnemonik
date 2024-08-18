import Content from "./Content";
import EmptyContent from "./EmptyContent";
import Sidebar from "./Sidebar";

import { AppMode } from "../constant/app-mode";
import { useAppContext } from "../context/AppContext";

const Body = () => {
  const { mode } = useAppContext();

  return (
    <div
      className="flex flex-grow flex-col-reverse lg:flex-row gap-4 p-4 lg:overflow-hidden bg-gray-200"
      style={{
        marginTop: 64,
      }}
    >
      <div className="lg:w-4/12 flex flex-col gap-4">
        <Sidebar />
      </div>
      <div className="flex flex-grow overflow-y-auto h-96 lg:h-auto">
        {mode.data !== AppMode.Default ? <Content /> : <EmptyContent />}
      </div>
    </div>
  );
};

export default Body;
