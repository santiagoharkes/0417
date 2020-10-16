// function unis() {
//   console.log("Unis");
// }

// function dis() {
//   setTimeout(() => {
//     console.log("Dos");
//   }, 0);
// }

// function dis() {
//   console.log("Dos");
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

// unis(); // Lo ejecuta
// dis(); // Es asincrono, se lo pasa a su asistente y sigue
// tris(); // Lo ejecuta
// cuitri();
// cinqui();

// CALLBACK
// Es una funcion que se la pasa como parametro a otra funcion

// DEFINIMOS LA FUNCION

const traerUsuario = (documento, danielita) => {
  const usuarioDeclarado = {
    nombre: "Juancito",
    dni: documento,
  };

  if (documento === 111) {
    danielita("No existe el usuario " + documento);
  } else {
    danielita(null, usuarioDeclarado);
  }
};

const funcionCallback = (parametroError, deberiaUsuario) => {
  if (parametroError) {
    return console.log(parametroError);
  }
  console.log(`El dni de usuario es ${deberiaUsuario.dni}`);
};

traerUsuario(111, funcionCallback);

// ***********************************************************
// CLASE 17
// ***********************************************************

// OTRO EJEMPLO DE CALLBACK

const chequearArray = (arrayPasadoPorParametro, funcionCallbackDelMal) => {
  if (arrayPasadoPorParametro.length > 0) {
    const franquitoMapeado = arrayPasadoPorParametro.map(
      (itemDeMap) => itemDeMap + 1
    );
    funcionCallbackDelMal(null, franquitoMapeado);
  } else {
    funcionCallbackDelMal("LO ROMPISTE");
  }
};

chequearArray([10, 20, 30, 40], (error, mapeado) => {
  if (error) {
    return console.log(error);
  }
  const filtrado = mapeado.filter((item) => item === 21);
  console.log(filtrado);
});
