import React from "react";

import styles from "./AcheUno.module.css";

function AcheUno(props) {
  console.log("Se renderizó el componente AcheUno");

  return <h1 className={styles.numerito}>{props.otraPropiedad}</h1>;
}

export default AcheUno;
