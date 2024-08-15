import { MdMenu, MdMoreVert } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="flex justify-between p-5 shadow-md bg-zinc-800 text-slate-100">
      <div>
        <MdMenu className="text-2xl" />
      </div>
      <div>
        <h1 className="font-bold">Mnemonik: A Note-taking App</h1>
      </div>
      <div>
        <MdMoreVert className="text-2xl" />
      </div>
    </div>
  );
};

export default TopBar;
