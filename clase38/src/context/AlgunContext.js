import React, { createContext } from "react";

export const AlgunContext = createContext();

function AlgunProvider({ children }) {
  return (
    <AlgunContext.Provider
      value={{
        nombre: "Soy",
        apellido: "Cordobé",
        saludar: function () {
          console.log("Me gusta el vino y la joda");
        },
      }}
    >
      {children}
    </AlgunContext.Provider>
  );
}

export default AlgunProvider;
