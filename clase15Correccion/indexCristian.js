const usuarios = [];

const nombre = document.getElementById("nombre");
const habilitado = document.getElementById("habilitado");
const deshabilitado = document.getElementById("deshabilitado");
const boton = document.getElementById("boton");
const listContainer = document.getElementById("listaContenedora");
const dni = document.getElementById("dni");

//const deleteButton = document.getElementById("deleteProductButton");

//console.log(habilitado.checked);
//console.log(deshabilitado.checked);

//ahora voy agregar el evento diganme como seguir los escucho

boton.addEventListener("click", callback);
document.addEventListener("click", deleteProduct);

// AHORA HAGO LA FUNCION

function callback(e) {
  e.preventDefault();

  let existe = false;

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].dni === dni.value) {
      existe = true;
    }
  }

  if (existe === false) {
    if (habilitado.checked) {
      const usuario = {
        nombree: nombre.value,
        acceso: true,
        id: usuarios.length + 1,
        dni: dni.value,
      };
      // ahora voy a pushear
      usuarios.push(usuario);
    } else {
      const usuario = {
        nombree: nombre.value,
        acceso: false,
        id: usuarios.length + 1,
        dni: dni.value,
      };
      usuarios.push(usuario);
    }
  } else {
    alert("este dni ya existe");
  }

  showList(usuarios);
  nombre.value = "";
  dni.value = "";
} /* fin funcion */

function showList(array) {
  return (listContainer.innerHTML = `<ul> ${array
    .map(
      (item) =>
        `<li key=${item.id}>${item.nombree} ${item.acceso} <button id="deleteProductButton">eliminar</button></li>`
    )
    .join(" ")}</ul>`);
}

function deleteProduct(e) {
  if (e.target.id === "deleteProductButton") {
    const elementoABuscar = e.target.parentNode.attributes.key.value;
    const resultado = usuarios.find((item) => item.id == elementoABuscar);
    const indexAEliminar = usuarios.indexOf(resultado);
    usuarios.splice(indexAEliminar, 1);

    showList(usuarios);
  }
}

function searchPersonas(e) {
  e.preventDefault();

  const personaABuscar = buscarDni.value;

  const personaFiltrada = usuarios.filter((item) =>
    item.includes(toString(personaABuscar))
  );

  showList(personaFiltrada);
}
