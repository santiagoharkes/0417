import "./App.css";
import Botoncito from "./Botoncito";

import ComponentePaArrays from "./ComponentePaArrays";
import ComponentePaObjetos from "./ComponentePaObjetos";

import ComponenteDeClase from "./ComponenteDeClase";

function App() {
  const onButtonClick = () => {
    console.log("Hola");
  };

  const unObjetoRePiola = {
    nombre: "Pepe",
    apellido: "Argento",
  };

  return (
    <div className="home">
      {/* <Titulo buliano={true} ornitorrinco="pepe" elefante="argento" />
      <Titulo buliano={false} />
      <Titulo buliano={true} />
      <Botoncito
        textito="Boton uno"
        funcioncita={() => console.log("Botoncito uno")}
      />

      <Botoncito textito="Boton dos" numerito={5} funcioncita={onButtonClick} />

      <ComponentePaArrays arraycito={[1, 2, 3]} />

      <ComponentePaObjetos
        objetito={unObjetoRePiola}
        otraPropiedad={true}
        verdadero="Hola"
        arraycito={[1, 2, 3, 4]}
      />*/}

      <ComponenteDeClase />
    </div>
  );
}

export default App;
