import React, { useState } from "react";

import "./ContadorConHooks.css";

// import FotoPaisaje from "../../Images/foto.jpg";

import ContenedorDeEstado from "./ContenedorDeEstado";

function ContadorConHooks() {
  //   const [estado, funcion] = useState(estadoInicial)
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState("");

  console.log("Se renderizó el componente ContadorConHooks");

  const sumarNumerito = () => {
    setContador(contador + 1);
    setMensaje("");
  };

  const restarNumerito = () => {
    if (contador === 0) {
      setMensaje("El numero no puede ser menor a 0");
      return;
    }

    setContador(contador - 1);
  };

  return (
    <div className="contenedor-principal">
      {/* <img src={FotoPaisaje} alt="" /> */}
      {/* <img src="../../Images/foto.jpg" alt="" /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button className="botoncito" onClick={restarNumerito}>
          Restar
        </button>
        <ContenedorDeEstado numero={contador} />
        <button className="botoncito" onClick={sumarNumerito}>
          Sumar
        </button>
        <p className="numerito">4</p>
      </div>
      <div>
        <h1 style={{ fontSize: "1rem" }}>{mensaje && mensaje}</h1>
      </div>
      <div>
        <h1 style={{ fontSize: "1rem" }}>{mensaje ? mensaje : ""}</h1>
      </div>
    </div>
  );
}

export default ContadorConHooks;
