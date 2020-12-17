import React from "react";

function Botoncito({ numerito, funcioncita, textito }) {
  return <button onClick={funcioncita}>{numerito}</button>;
}

export default Botoncito;
