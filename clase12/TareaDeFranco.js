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
const reduceIngreso = movimientos.reduce(
  (acumulador, actual) =>
    typeof actual.monto == "number" && actual.tipo === "ingreso"
      ? acumulador + actual.monto
      : acumulador,
  0
);

// const reduceIngreso = movimientos.reduce((acum, actual) => {
//   console.log(acum);
//   console.log(actual);
//   if (typeof actual.monto === "number" && actual.tipo === "ingreso") {
//     const variable = { monto: acum.monto + actual.monto };
//     return variable;
//   } else {
//     return { monto: acum.monto };
//   }
// });

console.log(reduceIngreso);

// Para el reduce Extraccion hice lo mismo pero esta vez preguntandolé
// Si eran de egresos.
const reduceExtraccion = movimientos.reduce(
  (acumulador, actual) =>
    typeof actual.monto == "number" && actual.tipo === "extraccion"
      ? acumulador + actual.monto
      : acumulador,
  0
);
// Con las const creadas anteriormente para saber el saldo
// Solo tuve que crear una nueva const y restarle
// El ingreso - Extraccion
// De esa manera me arroja el saldo total.
const reduceTotal = reduceIngreso - reduceExtraccion;

console.log("Los ingresos a la cuenta son " + reduceIngreso);
console.log("Las extracciones de la cuenta son " + reduceExtraccion);
console.log("El saldo total de la cuenta es " + reduceTotal);
