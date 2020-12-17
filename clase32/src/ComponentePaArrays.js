import React from "react";

function ComponentePaArrays(props) {
  return (
    <div>
      {props.arraycito.map((valor) => (
        <h1>{`El valor en este caso es ${valor} y si le sumo 2 es ${
          valor + 2
        }`}</h1>
      ))}
    </div>
  );
}

export default ComponentePaArrays;
