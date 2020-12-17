import React from "react";
import Botoncito from "./Botoncito";

function Titulo(props) {
  const juancito = props.buliano;

  return (
    <>
      {juancito && (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            corrupti ipsa expedita quaerat tempora sit! Perspiciatis libero fuga
            placeat exercitationem recusandae maxime sequi hic illum id sunt
            molestias veritatis ut, perferendis minus dignissimos, modi dicta
            eos incidunt labore saepe possimus accusantium nemo reiciendis?
            Officiis mollitia, libero provident dolorum molestias ab?
          </p>
          <Botoncito />
        </>
      )}
      <h1>Este es el componente Titulo</h1>
      <h2>{2 + 2}</h2>
      <h4>{props.ornitorrinco}</h4>
      <h4>{props.elefante}</h4>
    </>
  );
}

export default Titulo;
