import React, { useContext } from "react";
import "./Tarjetita.css";

import TemaContexto from "../context/TemaContexto";

function Tarjetita() {
  const { toggleTema, dark } = useContext(TemaContexto);

  console.log("El valor de Dark es " + dark);

  return (
    <div className="tarjetita">
      <h2>Holis</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor non
        sequi quae dolorem! Quo eos corporis doloribus unde iste possimus
        distinctio recusandae minima quam. Reprehenderit unde cupiditate nam
        dicta esse.
      </p>
      <button onClick={toggleTema}>Apretame</button>
    </div>
  );
}

export default Tarjetita;
