import React, { useEffect, useState } from "react";

function Listita({ pintarNumeritos }) {
  const [numeritos, setNumeritos] = useState([]);

  useEffect(() => {
    setNumeritos(pintarNumeritos());
    console.log("Estoy ejecutando el useEffect");
  }, [pintarNumeritos]);

  return (
    <div>
      {numeritos.map((valor, index) => (
        <h1 key={index}>{valor}</h1>
      ))}
    </div>
  );
}

export default Listita;
