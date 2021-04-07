import React, { useEffect, memo } from "react";
import Item from "./Item";

function Listita({ personitas }) {
  useEffect(() => {
    console.log("Estoy renderizando LISTITA");
  });

  return personitas.map((persona, index) => (
    <Item key={index} persona={persona} />
  ));
}

export default memo(Listita);
