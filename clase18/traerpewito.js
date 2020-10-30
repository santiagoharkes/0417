const botoncitoLindo = document.getElementById("button");
const imagenContainer = document.getElementById("imagen");

window.addEventListener("DOMContentLoaded", haganLaTarea);
botoncitoLindo.addEventListener("click", haganLaTarea);

const traerPewito = async () => {
  try {
    const fetchPewito = await fetch("https://dog.ceo/api/breeds/image/random");
    const pewitoDefinitivo = await fetchPewito.json();
    return pewitoDefinitivo.message;
  } catch (error) {
    console.log(error);
  }
};

const mostrarPerrito = (imagenUrl) => {
  const codigoHTML = `<img src="${imagenUrl}">`;
  imagenContainer.innerHTML = codigoHTML;
};

async function haganLaTarea() {
  const imageUrl = await traerPewito();
  mostrarPerrito(imageUrl);
}

// **************************************** TAREA PARA EL HOGAR ****************************************
// Hacer la funcion del botón
// Quiero que cuando haga click en el botón:
// Vaya a buscar un link random
// Y luego lo pinte (renderice)
// Esto ya lo estamos haciendo en algún lado...🤔
// PERO EN DONDE??!! 😩😩😩😩😩😩
