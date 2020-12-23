import React from "react";

import AcheUno from "./AcheUno";

function ContenedorDeEstado(props) {
  console.log("Se renderizó el componente ContenedorDeEstado");

  return (
    <div>
      <AcheUno otraPropiedad={props.numero} />
    </div>
  );
}

export default ContenedorDeEstado;
