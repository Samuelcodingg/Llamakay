import { useState } from "react";
import { AppContext } from "./AppContext";
import { AppRouter } from "./routers/AppRouter";

function App() {

  const [valuesLogin, setValuesLogin] = useState({
    correo: '',
    password: '',
    tipo_usuario: '',
    redirectToReferrer: false
  });

  const [ valuesRegister, setValuesRegister ] = useState({
    correo: '',
    password: '',
    tipo_usuario: '',
    redirectToReferrer: false
  });

  return (
    <AppContext.Provider
      value={{
        valuesLogin,
        setValuesLogin,
        valuesRegister,
        setValuesRegister
      }}
    >
      <AppRouter />
    </AppContext.Provider>
  );
}

export default App;
