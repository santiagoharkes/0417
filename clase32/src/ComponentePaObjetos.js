import React from "react";

function ComponentePaObjetos({ objetito, verdadero }) {
  return (
    <div className="ES EL COMPONENTE PARA OBJETOS">
      <h1>{objetito.nombre}</h1>
      <h1>{verdadero}</h1>
    </div>
  );
}

export default ComponentePaObjetos;
