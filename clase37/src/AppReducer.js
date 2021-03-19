import React, { useReducer, useState } from "react";
import "./App.css";

function App() {
  // useReducer es un hook de React que nos permite manejar estados un poco más complejos

  // Estructura principal de useReducer
  // const [estado, dispatch] = useReducer(reducer, estadoInicial)

  const reducer = (estado, action) => {
    switch (action) {
      case "SUMAR":
        return {
          ...estado,
          error: null,
          propiedadContador: estado.propiedadContador + 1,
        };

      case "RESTAR":
        return {
          ...estado,
          error:
            estado.propiedadContador === 0
              ? "No se puede restar más porque se pudre"
              : null,
          propiedadContador:
            estado.propiedadContador < 1 ? 0 : estado.propiedadContador - 1,
        };

      case "CAMBIAR_TITULO":
        return {
          ...estado,
          titulo: "CAMBIAMOS EL TITULO DINAMICAMENTE CON UN DISPATCH",
        };

      default:
        break;
    }
  };

  const initialState = {
    propiedadContador: 0,
    error: null,
    titulo: "Esto es un titulo",
  };

  const [estadoContador, dispatch] = useReducer(reducer, initialState);

  const sumarNumero = () => {
    dispatch("SUMAR");
  };

  const restarNumero = () => {
    dispatch("RESTAR");
  };

  return (
    <div className="App">
      <h1>{estadoContador.titulo}</h1>

      <button onClick={restarNumero} disabled={estadoContador.error && true}>
        Restar
      </button>
      <p>{estadoContador.propiedadContador}</p>
      <button onClick={sumarNumero}>Sumar</button>

      <button onClick={() => dispatch("CAMBIAR_TITULO")}>Cambiar titulo</button>

      {estadoContador.error && <h1>{estadoContador.error}</h1>}
    </div>
  );
}

export default App;
