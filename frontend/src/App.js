import { AppContext } from "./AppContext";
import { AppRouter } from "./routers/AppRouter";

function App() {

  return (
    <AppContext.Provider
      value={{
        
      }}
    >
      <AppRouter />
    </AppContext.Provider>
  );
}

export default App;
