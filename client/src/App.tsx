import Main from "./components/Main";

import { AppContextProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppContextProvider>
      <Main />
    </AppContextProvider>
  );
};

export default App;
