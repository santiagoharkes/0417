const productos = [];

// llamamos a los elementos
const inputText = document.getElementById("inputText");
const agregarProducto = document.getElementById("agregarProducto");
const listContainer = document.getElementById("listContainer");

// agregar los listeners
agregarProducto.addEventListener("click", addProduct);

// definir la funcion

function addProduct(e) {
  // Que queremos que haga la funcion?
  // Queremos que tome el valor del input text
  // Queremos que agregue ese valor en el array
  e.preventDefault();

  // Vamos a tomar el valor del input
  const productoValue = inputText.value;

  // Vamos a agregar al array el valor
  productos.push(productoValue);

  showList(productos);
}

function showList(array) {
  return (listContainer.innerHTML = `<ul> ${productos
    .map((item, index) => `<li key=${index}>${item}</li>`)
    .join("")} </ul>`);
}
