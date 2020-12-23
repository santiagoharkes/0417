import React, { useState } from "react";

import "./App.css";
import Cuadrito from "./components/Cuadrito";

function App() {
  const [mostrarCuadrito, setMostrarCuadrito] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setMostrarCuadrito(!mostrarCuadrito)}>
        Ocultar cuadro
      </button>
      {mostrarCuadrito ? <Cuadrito /> : null}
    </div>
  );
}

export default App;
