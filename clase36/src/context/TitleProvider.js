import React from "react";

import { TitleContext } from "./TitleContext";

function Dealer({ children }) {
  return (
    <TitleContext.Provider
      value={{ nombre: "Rodri", apellido: "No me acuerdo" }}
    >
      {children}
    </TitleContext.Provider>
  );
}

export default Dealer;
