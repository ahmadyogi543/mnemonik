import Body from "./components/Body";
import Topbar from "./components/Topbar";

import { AppContextProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppContextProvider>
      <Topbar />
      <Body />
    </AppContextProvider>
  );
};

export default App;
