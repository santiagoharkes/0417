import React, { useEffect, memo } from "react";

function Item({ persona }) {
  useEffect(() => {
    console.log("Estoy renderizando ITEM");
  });
  return <div>{persona.nombre}</div>;
}

export default memo(Item);
