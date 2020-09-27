// COSITAS DE DOCUMENT

// CREATE ELEMENT
const createElement = document.createElement("div");
const createTextNode = document.createTextNode("Holis");
const appendTextToElement = createElement.appendChild(createTextNode);

// console.log(createElement);
// console.log(createTextNode);
// console.log(appendTextToElement);

// GET ELEMENT BY ID
const getById = document.getElementById("firstSection");

// GET ELEMENTS BY CLASS NAME
const getByClassName = document.getElementsByClassName("parrafito");

// QUERY SELECTOR
// Hay que agregarle un selector valido de CSS
// O sea, si es una clase, va con punto
// Trae solo la primera coincidencia
const getByQuerySelector = document.querySelector(".parrafito");

// QUERY SELECTOR ALL
// Es igual al de arriba pero los trae a todos
const getByQuerySelectorAll = document.querySelectorAll(".parrafito");

// GET ELEMENT BY TAG NAME
const getByTagName = document.getElementsByTagName("h3");
// console.log(getByTagName);

// GET ELEMENT BY TAG NAME PERO SOLAMENTE DE LA ETIQUETA ASIDE
// const getAsideById = document.getElementById("aside");
// console.log(getAsideById);

// const getByTagName = getAsideById.getElementsByTagName("h3");
// console.log(getByTagName);

// GET ELEMENT BY NAME
// const getByName = document.getElementsByName("ProductoSupermercado");
// console.log(getByName);

// COSITAS DE ELEMENTOS

// ELEMENTO.classList
// Genera un array con todas las clases que tiene el elemento
// const getClassList = getById.classList;
// console.log(getClassList);

// ELEMENTO.className
// Devuelve un string con todas las clases del elemento (parecido a .classList.value)
// const getClassName = getById.className;
// console.log(getClassName);

// ELEMENTO.

const getInputById = document.getElementsByTagName("input")[0];
console.log(getInputById);

const getAttributes = getInputById.attributes;
console.log(getAttributes);
