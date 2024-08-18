import { useEffect } from "react";

import Body from "./Body";
import Topbar from "./Topbar";

import { useAppContext } from "../context/AppContext";

const Main = () => {
  const { status } = useAppContext();

  useEffect(() => {
    if (!status.error) return;

    // alert(status.error.message);
    alert("Maaf terjadi kesalahan pada sistem");
  }, [status]);

  // TODO: use the status.loading to have a circular loading screen
  // show to the user and if still true, the app is unusable
  return (
    <>
      <Topbar />
      <Body />
    </>
  );
};

export default Main;
