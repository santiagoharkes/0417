import "./Botoncito.css";

function Botoncito(props) {
  return (
    <button className={props.clase} onClick={props.tiburoncin}>
      {props.titulo} {props.otraPropiedad}
    </button>
  );
}

export default Botoncito;

// doc

// Este componente puede recibir una propiedad clase como string, para estilarlo
