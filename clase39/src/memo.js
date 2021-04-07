import React, { useEffect, useState } from "react";
import Listita from "./components/Listita";

const personitas = [
  {
    nombre: "Rodri",
  },
  { nombre: "Dani" },
  {
    nombre: "Emi",
  },
];

function App() {
  const [loDelInput, setLoDelInput] = useState("");
  const [genteRara, setGenteRara] = useState(personitas);

  useEffect(() => {
    console.log("Estoy renderizando APP");
  });

  const onInputChange = (e) => {
    setLoDelInput(e.target.value);
  };

  const onAgregarPersonita = (e) => {
    e.preventDefault();
    setGenteRara([...genteRara, { nombre: loDelInput }]);
    setLoDelInput("");
  };

  return (
    <div>
      <form action="" onSubmit={onAgregarPersonita}>
        <input type="text" onChange={onInputChange} value={loDelInput} />
        <button type="submit">Agregar</button>
      </form>
      <Listita personitas={genteRara} />
    </div>
  );
}

export default App;
