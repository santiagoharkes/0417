const productos = [];

// llamamos a los elementos
const inputText = document.getElementById("inputText");
const agregarProducto = document.getElementById("agregarProducto");
const listContainer = document.getElementById("listContainer");
const deleteButton = document.getElementById("deleteProductButton");
const inputTextBusqueda = document.getElementById("buscarProducto");
const searchButton = document.getElementById("botonBuscar");

// agregar los listeners
agregarProducto.addEventListener("click", addProduct);
searchButton.addEventListener("click", searchProduct);
document.addEventListener("click", deleteProduct);

// definir la funcion

function addProduct(e) {
  // Que queremos que haga la funcion?
  // Queremos que tome el valor del input text
  // Queremos que agregue ese valor en el array
  e.preventDefault();

  // Vamos a tomar el valor del input
  const productoValue = inputText.value;

  if (productoValue === "") {
    alert("No podes agregar productos vacios");
  } else {
    // Vamos a agregar al array el valor
    productos.push(productoValue);

    // Llamamos la funcion para que muestre la lista con el array productos
    mostrarListaPiola(productos);

    // Vamos a borrar el contenido del input
    inputText.value = "";
  }
}

function mostrarListaPiola(array) {
  return (listContainer.innerHTML = `<ul> ${array
    .map(
      (item, index) =>
        `<li key=${index}>${item} <button id="deleteProductButton">Eliminar</button></li>`
    )
    .join("")} </ul>`);
}

function deleteProduct(e) {
  if (e.target.id === "deleteProductButton") {
    // console.log("Apretaste el boton eliminar");
    // Vamos a necesitar un metodo de los arrays, que elimine un elemento del mismo, independientemente
    // de la posicion en la que se encuentre
    // Encontramos que ese metodo es SPLICE
    // Para pasarle un index a SPLICE vamos a buscar por el contenido del array
    // El metodo para esto es array.indexOf("loquequierobuscar")

    const elementoABuscar = e.target.parentNode.firstChild.data.trim();
    const indexAEliminar = productos.indexOf(elementoABuscar);

    productos.splice(indexAEliminar, 1);

    mostrarListaPiola(productos);
    console.log(productos);
  }
}

function searchProduct(e) {
  e.preventDefault();
  // Tenemos que obtener el valor del input de search
  const productoABuscar = inputTextBusqueda.value;
  console.log(productoABuscar);
  // Filtrar el array original con el texto buscado
  const productosFiltrados = productos.filter((item) =>
    item.toUpperCase().includes(productoABuscar.toUpperCase())
  );

  // Le pasamos el array filtrado a la funcion Mostrar Lista

  mostrarListaPiola(productosFiltrados);
}

// const arrayPrueba = ["Hola", "Como", 4, "Estas"];
// console.log("Este es el array original");
// console.log(arrayPrueba);
// METODO DE ARRAY SPLICE
// splice(posicion, cantidad de elementos a borrar, elementos a agregar)

// Borrar UN elemento en la posicion 2
// arrayPrueba.splice(2, 1);
// console.log("Esto es lo que devuelve splice");
// console.log(arrayModificado);

// Agregar elementos en la posición indicada
// arrayPrueba.splice(2, 2, "tu", "estas");

// console.log("Este es el array modificado");
// console.log(arrayPrueba);

// METODO INDEXOF DE ARRAYS
// const arrayPrueba = ["Hola", "Como", 4, "Estas"];

// Le paso lo que quiero buscar en el array y que me devuelva el index
// console.log(arrayPrueba);
// console.log(arrayPrueba.indexOf("Como"));

// ********************************************************************* //
//                          T A R E A                                    //
// ********************************************************************* //

const stringTarea = "Cancion de Marolio";

// Cuenten cuantas letras O tiene el string
