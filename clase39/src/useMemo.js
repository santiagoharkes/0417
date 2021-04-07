import React, { useState, useMemo } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const [dark, setDark] = useState(false);

  const sumarNumero = () => {
    setContador(contador + 1);
  };

  const restarNumero = () => {
    setContador(contador - 1);
  };

  // useMemo(callback, arrayDD)
  // useMemo(() => {}, [])
  // Si algun elemento del arrayDD, la funcion se vuelve a ejecutar

  const multiplicarNumero = useMemo(() => funcionReContraLenta(contador), [
    contador,
  ]);

  function funcionReContraLenta(numero) {
    for (let i = 0; i <= 1000000000; i++) {}

    return numero * 2;
  }

  const estilitos = {
    backgroundColor: dark ? "black" : "gray",
    color: dark ? "white" : "black",
    width: "300px",
    height: "300px",
  };

  return (
    <div>
      <button onClick={restarNumero}>Restar</button>
      <p>{contador}</p>
      <button onClick={sumarNumero}>Sumar</button>

      <button onClick={() => setDark(!dark)}>Cambiar tema</button>

      <div style={estilitos}>{multiplicarNumero}</div>
    </div>
  );
}

export default App;

// REACT ES PERFORMANTE DE POR SI. O SEA, ANDA TODO RE PIOLA Y RE RAPIDO.

// USEMEMO

// Sirve para memorizar VALORES

// USECALLBACK

// Sirve para memorizar FUNCIONES
