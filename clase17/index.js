// PROMESAS

// new Promise(executor);

// const holis = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Traje hieloooooooooooooooo");
//   }, 2000);
// });

// EJEMPLO DE PROMESA

// const clima = true;

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

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
  })
  .then((valorcito) => console.log(valorcito.results[15].name));
//   .catch((error) => console.log(error));
