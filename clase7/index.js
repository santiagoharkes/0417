let arraycitoLindo = ["Hola Juan", "Como", "Andas", "Juancito"];

// La funcion map va a recibir una funcion como parametro
// arraycitoLindo.map((elemento) => console.log("Esto es un elemento"));
// console.log(arraycitoLindo);

// La funcion filter, recibe una funcion que actua como test.
// Y devuelve el elemento que cumpla con el test.
// const filtrado = arraycitoLindo.filter((elemento) => elemento.length > 4);
// console.log(filtrado);

// El push va a agregar un elemento al final del array
// arraycitoLindo.push("Amigo");
// console.log(arraycitoLindo);

// El metodo pop va a borrar el último elemento del array
// arraycitoLindo.pop();
// console.log(arraycitoLindo);

// El metodo shift elimina el primer elemento del array. No recibe ningun parametro.
// arraycitoLindo.shift("Che");
// console.log(arraycitoLindo);

// El metodo unshift va a agregar un elemento al principio del array
// arraycitoLindo.unshift("Che");
// console.log(arraycitoLindo);

// El metodo reduce, reduce el array a un solo valor.
// La funcion que se le pasa al reduce, recibe dos parametros
// El acumulador, y el elemento actual
// La funcion seria asi: reduce( function(acumulador, actual) => {}, valorInicial )
// reduce(funcion, valorInicial: opcional)

// let arraycitoNumeros = [1, 2, 55, 4, 5, 6, 7, 8, 10];
// const reduceArray = arraycitoNumeros.reduce((acumulador, actual) => {
//   console.log("------------------------------------------");
//   console.log("El acumulador es " + acumulador);
//   console.log("El numero actual es " + actual);
//   return acumulador + actual;
// });
// console.log(reduceArray);

// El metodo sort ordena alfabeticamente el array

// const arraySorteado = arraycitoLindo.sort();
// console.log("Array alfabeticamente");
// console.log(arraySorteado);

// arraySorteado.reverse();

// console.log("Array en reversa");
// console.log(arraySorteado);

// let arraycitoNumeros = [25, 15, 100];
// const arrayNumeroSorteado = arraycitoNumeros.sort((a, b) => b - a);
// console.log(arrayNumeroSorteado);

// (a, b) => a - b
// (25, 15) => 25 - 15
// Si a - b es MENOR a 0: el metodo sort, dice que A es menor a B
// Si a - b es MAYOR a 0: el metodo, dice que A es mayor a B
// Si a - b es igual a 0: son iguales, mantienen el mismo lugar

// El metodo slice corta el array desde una posicion a otra
// Opcionalmente le podemos indicar estas dos posiciones
// Los numeros negativos arrancan desde lo último

// const arrayCortado = arraycitoLindo.slice(-5);
// console.log(arraycitoLindo);
// console.log(arrayCortado);
