import { useEffect } from "react";

import Body from "./Body";
import Loading from "./Loading";
import Topbar from "./Topbar";

import { useAppContext } from "../context/AppContext";

const Main = () => {
  const { status } = useAppContext();

  useEffect(() => {
    if (!status.error) return;

    alert("Kesalahan: maaf terjadi gangguan pada sistem");
  }, [status.error]);

  return (
    <>
      {!status.loading ? (
        <>
          <Topbar />
          <Body />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Main;
