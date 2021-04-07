import React, { useEffect, useState } from "react";
import TemaContexto from "./TemaContexto";

function TemaProvider({ children }) {
  const [dark, setDark] = useState(
    window.localStorage.getItem("danielita") || true
  );

  const darkMode = [
    "--border: rgba(255, 255, 255, .3)",
    "--principal: #79248f",
    "--texto: #fff",
    "--otroTexto: #fff",
    "--fondo: #2d2d2d",
    "--titulo: rgba(255, 255, 5, 1)",
  ];

  const lightMode = [
    "--border: rgba(0, 0, 0, .3)",
    "--principal: #d80097",
    "--texto: #000",
    "--otroTexto: #cacaca",
    "--fondo: #fff",
    "--titulo: rgba(255, 100, 0, 1)",
  ];

  const aplicarTema = (tema) => {
    const root = document.getElementsByTagName("html")[0];

    root.style.cssText = tema.join(";");
  };

  const toggleTema = () => {
    setDark(!dark);
    window.localStorage.setItem("danielita", !dark);
  };

  useEffect(() => {
    const ultimoTema = window.localStorage.getItem("danielita");

    if (!ultimoTema || ultimoTema === "false") {
      aplicarTema(lightMode);
    }

    if (ultimoTema === "true") {
      aplicarTema(darkMode);
    }
  }, [dark]);

  return (
    <TemaContexto.Provider
      value={{
        dark,
        toggleTema,
      }}
    >
      {children}
    </TemaContexto.Provider>
  );
}

export default TemaProvider;
