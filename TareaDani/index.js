const personitas = [];

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const cargar = document.getElementById("submit");

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", crearPersona);

function personitasPiolas(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}

function crearPersona(e) {
  e.preventDefault();
  let personas = new personitasPiolas(nombre.value, apellido.value, edad.value);
  personitas.push(personas);
  console.log(personitas);
}
