import React, { useContext } from "react";
import "./Button.css";
import { AlgunContext } from "../context/AlgunContext";

function Button() {
  const { nombre, saludar } = useContext(AlgunContext);

  return (
    <button className="botoncito" onClick={saludar}>
      {nombre}
    </button>
  );
}

export default Button;
