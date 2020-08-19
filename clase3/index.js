// var let const

if (10 == 10 && 6 < 5) {
// || && < > <= <= == ===
 console.log("dio true");

} else {
    console.log("dio false");
}

for (let i = 10; i > 0; i--) {
    console.log(i);
}

let numeroWhile = 0;

while (numeroWhile <= 10) {
    console.log(numeroWhile);
    numeroWhile++;
}

let arrayEjemplo = [10, "string", "otra cosa"];

console.log(arrayEjemplo[3]);

function ejemplo(argumento, argumento2) {
    if (argumento.length < 3) {
        console.log(argumento)
    } else {
        console.log("dio falso")
    }

    if (argumento2) {
        console.log(argumento2)
    }
}

ejemplo(["parametro"], "parametro 2")
ejemplo(10)
ejemplo(["rojo", 7])
ejemplo(["lunes", "martes"])


//////////////////  CLASE 3

function nombreCompleto(nombre, apellido) {
    return nombre + ' ' + apellido;
}

console.log(nombreCompleto("Juan", "Perez"))

// CALCULADORA

const calculadora = document.querySelector('#calculadora');
const inputUno = document.querySelector('#inputUno');
const inputDos = document.querySelector('#inputDos');

calculadora.addEventListener('submit', callback)

function callback(e) {
    e.preventDefault()
    const inputUnoValue = Number(inputUno.value);
    const inputDosValue = Number(inputDos.value);
    console.log( inputUnoValue + inputDosValue )
}

// Calculadora 2

const calculadora2 = document.querySelector('#calculadora2');
const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const sumar = document.querySelector('#sumar');
const restar = document.querySelector('#restar');
const resultado = document.querySelector('#resultado');

sumar.addEventListener('click', sumarFn)
restar.addEventListener('click', restarFn)

function sumarFn() {

    if (number1.value === '' || number2.value === '') {
        // undefined null '' 0
        alert('Tenés que completar ambos campos')
        return
    }
    const primerValor = Number(number1.value)
    const segundoValor = Number(number2.value)
    const valorFinal = primerValor + segundoValor;

    // const parrafo = document.createElement('h1');
    // parrafo.textContent = valorFinal;

    // resultado.appendChild(parrafo)

    resultado.innerHTML = '<p>' + valorFinal + '</p>'

}

function restarFn() {
    const primerValor = Number(number1.value)
    const segundoValor = Number(number2.value)
    console.log(primerValor - segundoValor)
}

