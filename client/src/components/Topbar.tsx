// import { MdMenu, MdMoreVert } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="flex justify-center p-5 shadow-xl bg-zinc-800 text-white fixed w-full z-50">
      {/* <div>
        <MdMenu className="text-2xl" />
      </div> */}
      <div>
        <h1 className="font-semibold">MNEMONIK</h1>
      </div>
      {/* <div>
        <MdMoreVert className="text-2xl" />
      </div> */}
    </div>
  );
};

export default Topbar;
