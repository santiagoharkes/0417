// Forma 1

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((res) => {
//     return res.json();
//   })
//   .then((loQueDevuelveElThenAnterior) =>
//     console.log(loQueDevuelveElThenAnterior)
//   );
//   .catch((err) => console.log(err))

// Forma 2

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

// async function traerPewito() {
//   try {
//     const fetchPewito = await fetch("https://dog.ceo/api/breeds/image/random");
//     const pewitoDefinitivo = await fetchPewito.json();
//     console.log(pewitoDefinitivo.message);
//   } catch (error) {
//     console.log(error);
//   }
// }

// console.log("Holis");

// console.log(traerPewito());

// console.log("Chau");

// VOT 1: FETCH
// VOT 2: ASYNC AWAIT
