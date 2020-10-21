// PROMESAS

// new Promise(executor);

// const holis = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject("NO CONSEGUI HIELO");
//   }, 2000);
// });

// console.log(holis);

// EJEMPLO DE PROMESA

// const clima = false;

// const gente = new Promise(function (resolve, reject) {
//   if (clima) {
//     const previa = {
//       nombre: "Club one",
//       location: "Por el centro",
//       fecha: "Viernes",
//     };

//     resolve(previa);
//   } else {
//     reject("Se pudrió todo");
//   }
// });

// Metodo then
// Metodo catch

// gente
//   .then((valor) => {
//     console.log(valor.nombre);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Voy a escribir de nuevo lo de arriba para practicar :)

// console.log(gente);
// gente
//   .then((resultado) => console.log(resultado))
//   .catch((err) => console.log(err));

// function traerHielo(clima) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (clima) {
//         const previa = {
//           nombre: "Club one",
//           location: "Por el centro",
//           fecha: "Viernes",
//         };

//         resolve(previa);
//       } else {
//         reject("Se pudrió todo");
//       }
//     }, 5000);

//     console.log("HOLA");
//   });
// }

// traerHielo(false)
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// EJEMPLO DEL FAMOSISIMO CALLBACK HELL (?)

// setTimeout(() => {
//   console.log("Un segundo");
//   setTimeout(() => {
//     console.log("Dos segundos");
//     setTimeout(() => {
//       console.log("Tres segundos");
//       setTimeout(() => {
//         console.log("Cuatro segundos");
//         setTimeout(() => {
//           console.log("Cinco segundos");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// function ticTac() {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000);
//   });
// }

// ticTac()
//   .then(() => {
//     console.log("Un segundo");
//     return ticTac();
//   })
//   .then(() => {
//     console.log("Dos segundos");
//     return ticTac();
//   })
//   .then(() => {
//     console.log("Tres segundos");
//     return ticTac();
//   })
//   .then(() => {
//     console.log("Cuatro segundos");
//     return ticTac();
//   })
//   .then(() => {
//     console.log("Cinco segundos");
//     return ticTac();
//   });

// fetch("https://pokeapi.co/api/v2/pokemon")
//   .then((response) => {
//     return response.json();
//   })
//   .then((valorcito) => console.log(valorcito.results[15].name))
//   .catch((error) => console.log(error));

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((res) => {
//     return res.json();
//   })
//   .then((loQueDevuelveElThenAnterior) =>
//     console.log(loQueDevuelveElThenAnterior)
//   );
// .then((valorcito) => console.log(valorcito.results[15].name))
// .catch((error) => console.log(error));

// ESTO DE ACA ABAJO NO SE USA
// const unaRequest = new XMLHttpRequest();

// unaRequest.onload = function () {
//   const resAJSON = JSON.parse(this.responseText);
//   console.log(resAJSON);
// };

// unaRequest.onerror = function () {
//   console.log("Se rompió todo");
// };

// unaRequest.open("get", "https://dog.ceo/api/breeds/image/random");

// unaRequest.setRequestHeader("Accept", "application/json");

// unaRequest.send();
