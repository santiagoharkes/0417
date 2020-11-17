// Codigo de Franco
// const foo = {
//     log: function() {
//       console.log(this); // 1. foo
//       return function() {
//         console.log(this); // 2. Window
//       }
//     }
//   }

// const foo = {
//     log: function() {
//       console.log(this); // 1. foo
//       return () => {
//         // this is lexically scoped to the surrounding scope,
//         // ie, the foo object
//         console.log(this); // 2. foo
//       }
//     }
//   }

// const persona = {
//   nombre: "Dani",
//   ladrido: "SE ROMPIOOOOOOOOOOOO",
//   edad: 7,

//   hablar: function () {
//     console.log(this);

//   },

//   caminar: () => {
//     console.log(this);
//   },
// };

// persona.hablar();
// persona.caminar();

// const foo = {
//   log: function () {
//     console.log(this); // 1. foo
//     return function () {
//       console.log(this); // 2. Window
//     };
//   },
// };

// const dani = {
//   notas: {
//     lengua: 10,
//     matematica: 3,
//     geografia: 8,
//   },

//   promedio: function () {
//     let materias = Object.keys(this.notas);

//     return (
//       materias
//         .map((materia) => this.notas[materia])
//         .reduce(function (prev, curr) {
//           return prev + curr;
//         }) / materias.length
//     );
//   },
// };

// console.log(dani.promedio());

// const funcioncita = function () {
//   const holis = function () {
//     console.log("Hola mi edad es " + this.edad);
//   };

//   holis();
// };

// var edad = 45;

// funcioncita();

// const dani = {
//   nombre: "Rompiste",
//   apellido: "Todo",
// };

// const winiPu = {
//   nombre: "Wini",
//   apellido: "Pu",
// };

// const meGusta = ["El arte", "Programar", "Las funciones"];

// const funcioncita = function (
//   meGustaUno,
//   meGustaDos,
//   meGustaTres,
//   meGustaCuatro
// ) {
//   console.log(
//     `Holissss yo soy ${this.nombre} y me gusta ${meGustaUno}, ${meGustaDos}, ${meGustaTres} y ${meGustaCuatro}`
//   );
// };

// // Call, Apply, y Bind

// funcioncita.call(dani, meGusta[0], meGusta[1], "Jupiter");
// funcioncita.apply(winiPu, [...meGusta, "Futbol", "Voley", "Hockey"]);

// // Bind nos devuelve una funcion

// const funcionConBind = funcioncita.bind(
//   dani,
//   meGusta[0],
//   meGusta[1],
//   "EL BIND",
//   "El vino"
// );

// funcionConBind();

// --------------------------------------------------------

// const daniBuena = {};
// daniBuena.nombre = "Dani";
// daniBuena.apellido = "Buena";
// daniBuena.edad = 45;
// daniBuena.cumple = function () {
//   daniBuena.edad++;
// };

// const daniMala = Object.create(null);
// daniMala.nombre = "Dani";
// daniMala.apellido = "Buena";
// daniMala.edad = 45;
// daniMala.cumple = function () {
//   daniMala.edad++;
// };

function crearUsuario(nombre, apellido, edad) {
  const usuario = {};
  usuario.nombre = nombre;
  usuario.apellido = apellido;
  usuario.edad = edad;
  usuario.cumple = function () {
    usuario.edad++;
  };

  return usuario;
}

const daniBuena = crearUsuario("Dani", "Buena", 45);
const daniMala = crearUsuario("Dani", "Mala", 45);

console.log(daniBuena);
console.log(daniMala);
daniMala.cumple();
console.log(daniMala.edad);
