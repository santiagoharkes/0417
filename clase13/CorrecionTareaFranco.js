// const reduceIngreso = movimientos.reduce(
//     (acumulador, actual) =>
//       typeof actual.monto == "number" && actual.tipo === "ingreso"
//         ? acumulador + actual.monto
//         : acumulador,
//     0
//   );

//   Reduce
//   La funcion reduce recibe una funcion como parametro
//   Esta funcion recibe dos parametros
//   Un acumulador y el item actual que está iterando.Esta

//   Vamos a desglosar lo que hace esta funcion

//   Paso 1:
//   Acumulador: 0 porque se lo pasamos como parametro a la funcion reduce
//   actual.monto: 5000
//   Como pasa el condicional, actual.monto se suma a acumulador

//   Paso intermedio: acumulador es igual a 5000

//   Paso 2:
//   Acumulador: 5000
//   actual.monto: 300
//   Como pasa el condicional, actual.monto se suma a acumulador

//   Paso intermedio: acumulador es igual a 5300

//   Paso 3:
//   Acumulador: 5300
//   No pasa el condicional, devuelve el acumulador como esta

//   Paso intermedio: acumulador es igual a 5300

// POR QUÉ SE ROMPE SI LE SACO EL 0????????????????????????

// const reduceIngreso = movimientos.reduce(
//     (acumulador, actual) =>
//       typeof actual.monto == "number" && actual.tipo === "ingreso"
//         ? acumulador + actual.monto
//         : acumulador
//   );

//   Paso 1:
//   Acumulador va a ser el primer objeto
//   Cual es el primer objeto?
//   Este perri: {
//     tipo: "ingreso",
//     monto: 5000,
//   }

//   actual.monto: 300

//   La funcion Reduce pregunta: Y ahora que tengo que hacer si ya paso la condicion?
//   Ahora tenes que sumar el acumulador y el actual.monto

//   Reduce dice (grita): PERO ACUMULADOR ES UN OBJETO, Y ACTUAL.MONTO ES UN NUMERO
//   Ahora te rompo tood el codigo :)

//   Y aca estamos nosotros

// Una solucion es usar el parametro opcional de la funcion reduce, que es Valor inicial
// Otra solución, es la siguiente:

const reduceIngreso = movimientos.reduce((acumulador, actual) => {
  if (typeof actual.monto === "number" && actual.tipo === "ingreso") {
    const variable = { monto: acumulador.monto + actual.monto };
    return variable;
  } else {
    return { monto: acumulador.monto };
  }
});

Vamos a desglosar esta solucion

  Paso 1:
  Acumulador va a ser el primer objeto
  Cual es el primer objeto?
  Este perri: {
    tipo: "ingreso",
    monto: 5000,
  }

  Paso 2: 
  Actual va a ser el segundo objeto

  Paso 3:
  Chequear si pasa el condicional -> si lo pasa

  Paso 4:
  variable: {
      monto: 5000 + 300
  }

  Paso 5:
El acumulador es un objeto, y es el de arriba.

Paso 6:
Seguimos iterando
Ahora acumulador es el de arriba
Y actual es el tercer objeto del Array

Paso 7: 
Pasa el condicional? --> No 

Entonces devolve esto { monto: acumulador.monto };
Ok

Aca esta devolviendo un objeto, con la propiedad monto, y el valor es el monto del objeto acumulador.

CUAL ES EL MONTO DEL ACUMULADOR CRISTIAAAAAAAN?
CUAL ES EL ACUMULADOOOOOR?

El del paso 4
Este es el acumulador que tenemos hasta ahora
variable: {
    monto: 5000 + 300
}

Y acumulador.monto es igual a 5300

Paso 8:
{ monto: 5300 }

