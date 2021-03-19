import React from "react";

import Button from "./Botoncito/Botoncito";

function Lista({ arraycito }) {
  return (
    <div>
      {arraycito.map((valor) => (
        <Button titulo={valor} clase="btn" />
      ))}
    </div>
  );
}

export default Lista;
