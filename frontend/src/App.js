import { useState } from "react";
import { AppContext } from "./AppContext";
import { AppRouter } from "./routers/AppRouter";

function App() {

  const [user, setUser] = useState('');

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
