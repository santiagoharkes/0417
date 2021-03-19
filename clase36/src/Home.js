import React, { useState } from "react";

import "./App.css";

import ComponenteAlPedo from "./components/ComponenteAlPedo";

function Home() {
  const [contador, setContador] = useState();

  const sumarUno = () => {
    setContador(contador + 1);
  };

  const restarUno = () => {
    setContador(contador - 1);
  };

  return (
    <div className="contenedor">
      <ComponenteAlPedo titulo="Restar" tiburoncin={restarUno} />
      <h1>{contador}</h1>
      <ComponenteAlPedo titulo="Sumar" tiburoncin={sumarUno} />
    </div>
  );
}

export default Home;
