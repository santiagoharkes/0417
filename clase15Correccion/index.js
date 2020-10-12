// Vino un cliente muy imporante y nos
// pidió una mini app para ingresar
// personas e indicar si pueden o no
// comprar dólares. Queremos poder ingresar estos
// datos y que queden guardados (pista: puede ser en un array)
//
const array = [];

// DOM
const $nombre = document.querySelector("#nombre");
const $puede = document.querySelector("#puede");
const $noPuede = document.querySelector("#noPuede");
const $enviar = document.querySelector("#enviar");
const $lista = document.querySelector("#lista");
const deleteButton = document.getElementById("deleteProductButton");
const $dni = document.querySelector("#dni");
const $can = document.querySelector("#can");

// Eventos
const enviar = $enviar.addEventListener("click", addPerson);
document.addEventListener("click", deleteProduct);

//Function
// Esta funcion lo que hace es: tal cosa
function addPerson(e) {
  e.preventDefault();

  const dniValor = $dni.value;
  const personName = $nombre.value;
  const functionFilter = array.filter((item) => item.dni === dniValor);
  const puedeComprar = $can.checked;

  if (functionFilter.length > 0) {
    alert("El DNI YA ESTA EN NUESTRA BASE DE DATOS");
  } else {
    if (puedeComprar) {
      array.push({
        name: personName,
        habilitado: puedeComprar,
        id: array.length + 1,
        dni: dniValor,
      });
    } else {
      array.push({
        name: personName,
        habilitado: puedeComprar,
        id: array.length + 1,
        dni: dniValor,
      });
    }

    showList();
  }
}

function showList() {
  return ($lista.innerHTML = array
    .map((item) => {
      return `<li key=${item.id}>${item.name} ${item.habilitado} ${item.dni}
      <button id="deleteProductButton">Eliminar</button> </li>
    `;
    })
    .join(""));
}

function deleteProduct(e) {
  if (e.target.id === "deleteProductButton") {
    const idElementoABorrar = e.target.parentNode.attributes.key.value;
    const indexDeElementoABorrar = array.findIndex(
      (item) => item.id == idElementoABorrar
    );

    array.splice(indexDeElementoABorrar, 1);

    showList();
  }
}
