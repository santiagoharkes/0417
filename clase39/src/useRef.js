import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  // Esquema de useRef
  // const referenciaLinda = useRef(valorInicial) ----> {current: }

  const [nombrecito, setNombrecito] = useState("");

  const contador = useRef(1);

  useEffect(() => {
    console.log(
      "%cSE RENDERIZÓ EL COMPONENTE!",
      "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
  });

  const sumarAlgo = () => {
    contador.current = contador.current + 1;
  };

  return (
    <div className="App">
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setNombrecito(e.target.value)}
      />
      <div>Mi nombre es: {nombrecito}</div>
      <div>El componente se re renderizó {contador.current}</div>
      <button onClick={sumarAlgo}>Sumale uno a current</button>
    </div>
  );
}

export default App;

/* 

useState, es un hook.
Todo lo que empiece con USE es un hook.
Lo que hace useState es
1) tener un estado en el componente funcional (iniciarlo, modificarlo) y que persista entre renderizados.
2) re-renderizar el componente

useRef es otro hook,
Nos permite:
1) Guardar valores y persistirlos entre renderizados, pero no re-renderiza el componente
2) Hacer referencia a algun elemento del dom 

Es una funcion y nos devuelve un objeto mutable con una propiedad que se llama current.

*/
