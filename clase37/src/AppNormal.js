import React, { useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);
  const [error, setError] = useState("");

  const sumarNumero = () => {
    setError(null);
    setContador(contador + 1);
  };

  const restarNumero = () => {
    if (contador === 0) {
      setError("No podemos restar más porque se pudre la momia");
    } else {
      setContador(contador - 1);
    }
  };

  return (
    <div className="App">
      <button onClick={restarNumero} disabled={error && true}>
        Restar
      </button>
      <p>{contador}</p>
      <button onClick={sumarNumero}>Sumar</button>

      {error && <h1>{error}</h1>}
    </div>
  );
}

export default App;
