var movimientos = [
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

var extraccionesBancarias = movimientos.filter(function (mov) {
  return mov.tipo === "extraccion";
});

var ingresosBancarios = movimientos.filter((mov) => mov.tipo === "ingreso");

// console.log({ ingresosBancarios });
// console.log({ extraccionesBancarias });

var montosExt = extraccionesBancarias.map((item) => item["monto"]);
var montosIng = ingresosBancarios.map((item) => item["monto"]);
// console.log({ montosExt });
// console.log({ montosIng });

// const arrayNuevo = [7, 4, 5, 5, 6]

// Primera iteracion de reduce
// Tenemos el acumulador, y el valor actual
// Si no le pasamos ningun parametro indicando el valor inicial
// La funcion reduce agarra el primer valor de array, y lo usa como inicial
// En este caso, 7 será el acumulador
// Y empieza a iterar desde el segundo valor

var sumaExt = montosExt.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

var sumaIng = montosIng.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

//console.log(sumaExt)
//console.log(sumaIng)

var saldo = sumaIng - sumaExt;
//console.log(saldo)

console.log(`Este mes ha ingresado un total de ${sumaIng}`);
console.log(`Este mes ha extraído un total de ${sumaExt}`);
console.log(`Por lo tanto su saldo es de ${saldo}`);

if (saldo > 0) window.alert("Su balance mensual es POSITIVO");
else window.alert("Su balance mensual es NEGATIVO");
