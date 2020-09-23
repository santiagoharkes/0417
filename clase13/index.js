const movimientos = [
  {
    tipo: "ingreso",
    monto: 5000,
  },
  {
    tipo: "ingreso",
    monto: 300,
  },
  {
    tipo: "extraccion",
    monto: 500,
  },
  {
    tipo: "ingreso",
    monto: 300,
  },
  {
    tipo: "extraccion",
    monto: 1000,
  },

  {
    tipo: "ingreso",
    monto: 500,
  },
  {
    tipo: "ingreso",
    monto: 500,
  },
  {
    tipo: "ingreso",
    monto: 500,
  },
  {
    tipo: "extraccion",
    monto: 2000,
  },
  {
    tipo: "ingreso",
    monto: 500,
  },
  {
    tipo: "extraccion",
    monto: 500,
  },
];

// Para el reduceIngreso utilicé  el typeof para verificar
// que el monto sea un Number y el tipo sea de Ingreso
// Una vez que mi monto es un number y el tipo es de ingreso los sumé.
// const reduceIngreso = movimientos.reduce((acumulador, actual) => {
//   if (typeof actual.monto === "number" && actual.tipo === "ingreso") {
//     const variable = { monto: acumulador.monto + actual.monto };
//     return variable;
//   } else {
//     return { monto: acumulador.monto };
//   }
// });

// Para el reduce Extraccion hice lo mismo pero esta vez preguntandolé
// Si eran de egresos.

// const reduceExtraccion = movimientos.reduce((acumulador, actual) => {
//   if (typeof actual.monto === "number" && actual.tipo === "extraccion") {
//     const variable = { monto: acumulador.monto + actual.monto };
//     return variable;
//   } else {
//     return { monto: acumulador.monto };
//   }
// });
// Con las const creadas anteriormente para saber el saldo
// Solo tuve que crear una nueva const y restarle
// El ingreso - Extraccion
// De esa manera me arroja el saldo total

// Falta testear esto de bajo: es la solucion de Maigualida donde meteria los ingresos y las extracciones en un solo reduce. Mas choclo todavía jajaja
// const reduceTotal = movimientos.reduce((acumulador, actual) => {
//   if (
//     acumulador.tipo === "ingreso" &&
//     typeof actual.monto === "number" &&
//     actual.tipo === "ingreso"
//   ) {
//     const variable = {
//       monto: acumulador.monto + actual.monto,
//       tipo: "ingreso",
//     };
//     return variable;
//   } else {
//     const variable = {
//       monto: acumulador.monto - actual.monto,
//       tipo: "ingreso",
//     };
//     return variable;
//   }
// });

const reduceIngreso = movimientos.reduce((acumulador, actual) => {
  console.log({ acumulador });
  console.log({ actual });
  if (
    acumulador.tipo === "ingreso" &&
    typeof actual.monto === "number" &&
    actual.tipo === "ingreso"
  ) {
    const variable = {
      monto: acumulador.monto + actual.monto,
      tipo: "ingreso",
    };
    return variable;
  } else {
    return { monto: acumulador.monto, tipo: "ingreso" };
  }
});

console.log(reduceIngreso);

// Lo mismo que arriba pero con un ternario
// const reduceIngreso = movimientos.reduce((acumulador, actual) => {
//     const variable =
//       acumulador.tipo === "ingreso" &&
//       typeof actual.monto === "number" &&
//       actual.tipo === "ingreso"
//         ? { monto: acumulador.monto + actual.monto, tipo: "ingreso" }
//         : { monto: acumulador.monto, tipo: "ingreso" };
//     return variable;
//   });

//   console.log({ reduceIngreso });

const reduceExtraccion = movimientos.reduce((acumulador, actual) => {
  if (
    acumulador.tipo === "extraccion" &&
    typeof actual.monto === "number" &&
    actual.tipo === "extraccion"
  ) {
    const variable = { monto: acumulador.monto + actual.monto };
    return variable;
  } else {
    return { monto: acumulador.monto };
  }
});

console.log({ reduceExtraccion });

// const reduceTotal = reduceIngreso.monto - reduceExtraccion.monto;

// console.log("Los ingresos a la cuenta VIEJOS son 7600");
// console.log("Las extracciones de la cuenta VIEJAS son 4000");
// console.log("El saldo es de 3600");

// console.log("Los ingresos a la cuenta son " + reduceIngreso.monto);
// console.log("Las extracciones de la cuenta son " + reduceExtraccion.monto);
// console.log("El saldo total de la cuenta es " + reduceTotal);
