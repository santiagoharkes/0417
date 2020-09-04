// const objetoLindo = {
//   propiedad: "valor",
//   nombre: {
//     pila: "Pepito",
//     apodo: "Pepe",
//   },
//   apellido: "Gomez",
//   edad: 6,
//   intereses: ["futbol", "musica", "programar"],
//   saludar: function () {
//     console.log("Hola! Soy " + this.nombre.pila);
//   },
//   queEsThis: function () {
//     this;
//   },
// };

// Acceder a valores mediante el punto
// console.log(objetoLindo.propiedad);
// console.log(objetoLindo.nombre);
// console.log(objetoLindo.nombre.pila);
// console.log(objetoLindo.saludar);

// Otra forma de acceder a los valores
// console.log(objetoLindo["nombre"]["pila"]);
// console.log(objetoLindo["apellido"]);
// console.log(objetoLindo["edad"]);
// console.log(objetoLindo[2]);

// Manera para modificar datos ya existentes
// Una forma para modificar los valores del objeto con punto
// objetoLindo.nombre.pila = "Juancito";

// Otra forma con corchetes
// objetoLindo["nombre"]["pila"] = "Pepito renovado";

// Forma para agregar nuevos datos
// Forma para agregar nuevo dato con punto
// objetoLindo.nuevoNombre = "nuevoValor";
// objetoLindo.campeonatos = 9;

// Forma para agregar nuevo dato con corchete
// objetoLindo["trofeos"] = 89;

// Forma para agregar nuevo dato a traves de variables
// const nuevoNombre = "años2";
// const nuevoValor = 800;

// La unica opcion es usar los corchetes
// objetoLindo[nuevoNombre] = nuevoValor;

// console.log(objetoLindo);

// console.log("THIS AFUERA DEL OBJETO ES:");
// console.log(this);

// STRINGS
// Diferentes maneras de escribirlo

// Con comillas dobles
// const stringLindoDoble = "Hola estoy entre comillas dobles";
// Con comillas simples
// const stringLindoSimple = "Hola estoy entre comillas simples";
// Con comillas invertidas
// const variableRara = 10;
// const stringLindoInvertido = `El numero de la camiseta de messi es ${5 + 5}`;

// console.log(stringLindoInvertido);

// METODOS DE STRINGS
const stringLindo = "Harry Potter y la Piedra filosofal";

// SUBSTR
// Este método extrae un string de otro, desde la posición que le indiquemos
// Opcionalmente se le pasan los caracteres que se quieren extraer
// const stringSubstr = stringLindo.substr(5, 3);
// console.log(stringSubstr);

// STARTSWITH
// string.startsWith(otroString, posicionInicial)
// Se fija si el string empieza con otro string que le pasemos
// Devuelve true o false
// const otroString = "soy un s";
// const stringStart = stringLindo.startsWith(otroString, 5);
// console.log(stringStart);

// ENDSWITH
// Se fija si el string termina con otro string que le pasemos
// const otroString = "n";
// const stringEnd = stringLindo.endsWith("un", 11);
// console.log(stringEnd);

// INCLUDES
// Se fija si el string incluye otro string que le pasemos
// Devuelve true o false
// Sensible a las minusculas y mayusculas
// const otroString = "hola";
// const stringIncludes = stringLindo.includes(otroString);
// console.log(stringIncludes);

// TOUPPERCASE
// Pasa un string a mayusculas
// const stringMayuscula = stringLindo.toUpperCase();
// console.log(stringMayuscula);

// TOLOWERCASE
// const stringMinuscula = stringLindo.toLowerCase();
// console.log(stringMinuscula);

// JUNTAR INCLUDES Y TOUPPERCASE
const stringMayuscula = stringLindo.toUpperCase();
const stringIncludes = stringMayuscula.includes("piedra".toUpperCase());

console.log(stringMayuscula);
console.log("piedra".toUpperCase());

console.log(stringIncludes);
