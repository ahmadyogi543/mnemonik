import { NoteContextProvider } from "./context/NoteContext";

import Body from "./components/Body";
import Topbar from "./components/Topbar";

const App = () => {
  return (
    <NoteContextProvider>
      <Topbar />
      <Body />
    </NoteContextProvider>
  );
};

export default App;
