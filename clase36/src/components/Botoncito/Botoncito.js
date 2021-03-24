import { useContext } from "react";
import { TitleContext } from "../../context/TitleContext";
import "./Botoncito.css";

function Botoncito(props) {
  const valor = useContext(TitleContext);

  // useContext va a recibir un contexto como parametro, y nos va a devolver el/los valores que nos proveé el provider skdfjfn

  return (
    <button className={props.clase} onClick={props.tiburoncin}>
      {valor.nombre} - {valor.apellido}
    </button>
  );
}

export default Botoncito;

// doc

// Este componente puede recibir una propiedad clase como string, para estilarlo
