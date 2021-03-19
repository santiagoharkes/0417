import React from "react";

import UltimoComponenteAlPedo from "./UltimoComponenteAlPedo";

function ComponenteAlPedo(props) {
  return (
    <UltimoComponenteAlPedo
      titulo={props.titulo}
      tiburoncin={props.tiburoncin}
    />
  );
}

export default ComponenteAlPedo;
