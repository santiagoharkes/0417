// function unis() {
//   console.log("****************************");
//   console.log("Más");
//   console.log("Cosas");
//   console.log("****************************");
// }

// function dis() {
//   setTimeout(() => {
//     console.log("Dos");
//   }, 0);
// }

// function tris() {
//   console.log("Tres");
// }

// function cuitri() {
//   console.log("Cuatro");
// }

// function cinqui() {
//   console.log("Cinco");
// }

// unis();
// dis();
// tris();
// cuitri();
// cinqui();

// CALLBACK
// Es una funcion que se la pasa como parametro a otra funcion

// DEFINIMOS LA FUNCION

const traerUsuario = (id, funcioncita) => {
  const usuario = {
    nombre: "Juancito",
    id: id,
  };
  funcioncita(usuario);
};

// LLAMAMOS LA FUNCION

// const callbackDeLaFuncion = (usuarito) => {
//     console.log(`El usuario es ${usuarito}`)
// }

traerUsuario(2, (usuarito) => {
  console.log(`El usuario es ${usuarito.nombre}`);
});

// DUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

// NO ENTIENDO CUANDO USUARITO PASA A USUARIO :)
