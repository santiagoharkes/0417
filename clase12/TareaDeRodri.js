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

function sumarMovimientos(dato) {
  const filtrarMovimientos = movimientos.filter(
    (item) => item["tipo"] === dato
  );
  const extraerMontos = filtrarMovimientos.map((item) => item["monto"]);
  const sumarMontos = extraerMontos.reduce((accu, item) => {
    return accu + item;
  }, 0);
  return sumarMontos;
}

const totalIngresos = sumarMovimientos("ingreso");

console.log(`El total de ingresos es ${totalIngresos}`);

const totalExtraccion = sumarMovimientos("extraccion");

console.log(`El total de extracciones es ${totalExtraccion}`);

let saldo = totalIngresos - totalExtraccion;

console.log(`Su balance de cuenta es ${saldo}`);
