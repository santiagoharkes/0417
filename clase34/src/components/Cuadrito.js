import React, { useState, useEffect } from "react";

// #aec9ff

function Cuadrito() {
  const [color, setColor] = useState("#ffaeae");
  const [data, setData] = useState({});
  const [data, setData] = useState({});
  const [data, setData] = useState({});
  const [data, setData] = useState({});
  const [data, setData] = useState({});
  const [data, setData] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {
    function movimientoMouse(e) {
      if (e.clientX < window.innerWidth / 2) {
        setColor("#aec9ff");
      } else {
        setColor("#ffaeae");
      }
    }

    window.addEventListener("mousemove", movimientoMouse);

    console.log("Se montó el componente");

    return () => {
      console.log("Se desmontó el componente");
      window.removeEventListener("mousemove", movimientoMouse);
    };
  }, []);

  useEffect(() => {
    fetch(url)
      .then((valor) => valor.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div style={{ height: "90vh", backgroundColor: color }}>
      <h1>Holis</h1>
    </div>
  );
}

export default Cuadrito;
