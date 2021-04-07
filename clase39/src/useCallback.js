import React, { useCallback, useState } from "react";
import Listita from "./components/Listita";

function App() {
  const [contador, setContador] = useState(0);
  const [dark, setDark] = useState(false);

  const sumarNumero = () => {
    setContador(contador + 1);
  };

  const restarNumero = () => {
    setContador(contador - 1);
  };

  // const pintarNumeritos = () => {
  //   return [contador, contador + 1, contador + 2];
  // }

  const pintarNumeritos = useCallback(() => {
    return [contador, contador + 1, contador + 2];
  }, [contador]);

  const estilitos = {
    backgroundColor: dark ? "black" : "gray",
    color: dark ? "white" : "black",
    width: "100%",
    height: "20px",
    margin: "0 auto",
  };

  return (
    <div style={{ marginLeft: "50px" }}>
      <div style={estilitos}></div>
      <button onClick={restarNumero}>Restar</button>
      <p>{contador}</p>
      <button onClick={sumarNumero}>Sumar</button>

      <button onClick={() => setDark(!dark)}>Cambiar tema</button>

      <Listita pintarNumeritos={pintarNumeritos} />
    </div>
  );
}

export default App;

// REACT ES PERFORMANTE DE POR SI. O SEA, ANDA TODO RE PIOLA Y RE RAPIDO.

// USEMEMO

// Sirve para memorizar VALORES

// USECALLBACK

// Sirve para memorizar FUNCIONES
