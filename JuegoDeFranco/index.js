// TAREA
// leer que es this en los addEventListener
// Agregarle algun boton de Reset (dar vuelta todas las cartas, volver a mezclarlas, volver a agregarle los event listener... todo de nuevo)
// Contador de movimientos || un limite de movimientos (maximo de 12 movimientos y por cada !acierto, que reste uno, y cuando llega a 0, chau picho)
// Algun innerHtml que me diga: ganasTE PERRRIIIIIIIIIIII

/*
            Todavia no pude solucionar lo siguiente: 
            Que el tablero se bloquee cuando supera a x numero
            Por ejemplo si contadorMovimientos es mayor a 10 que se bloquee el tablero
            Segundo bug es que me tira error en el dataSet y no puedo hacer
            que cuando coincide reste 1

*/

// Boton para resetear - anda
// Cuando perdes te aparece algo
// Contador de movimientos

// Cuando adivinas que reste 1

const cartas = document.querySelectorAll(".memoria-card");

const tablero = document.getElementById("container");

const $contador = document.querySelector("#contador");
const $mensaje = document.querySelector("#mensaje");

let tableroBloqueado = false;
let arrancaste = false;
let primeraCarta, segundaCarta;

let contadorMovimientos = 0;
let mensaje = "PERDISTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE";

console.log(cartas);

function girar() {
  if (tableroBloqueado) return;

  // Si la primera carta, es igual a la que estoy apretando (segunda), que salga de la funcion
  // Puedo saber cual es la segunda carta aunque todavía no la haya guardado
  if (this === primeraCarta) return;

  this.classList.add("girar");

  if (!arrancaste) {
    arrancaste = true;
    primeraCarta = this;

    return;
  }

  arrancaste = false;
  segundaCarta = this;

  contador();
  comprobarCoincidencia();
}

// Funcion para reseTEAR LAS BAREAVLES

function resetearBareavle() {
  primeraCarta = null;
  segundaCarta = null;
}

// Necesito este reset en una funcion aparte
// porque lo voy a usar exclusivamente para el boton
function resetTotal() {
  tableroBloqueado = false;
  contadorMovimientos = 0;
  $contador.innerHTML = "CONTADOR 0/12";
  $mensaje.innerHTML = "";
}

//Hago una funcion contador
//Donde con innerHTML cada vez que hacen los 2 giros se suman al contador
//Necesito que si coinciden no sume el intento
//Y que si supera los Movimientos Máximos se bloquee.

function contador() {
  // console.log({ primeraCarta });
  // console.log({ segundaCarta });
  // console.log(primeraCarta.dataset.participante);
  // console.log(segundaCarta.dataset.participante);
  let coincidencia =
    primeraCarta.dataset.participante === segundaCarta.dataset.participante;
  coincidencia ? funcioncita1() : funcioncita2();
  // console.log(primeraCarta);
  // console.log(segundaCarta);
  // console.log(segundaCarta.dataset.participante);
  // console.log(primeraCarta.dataset.participante);
  if (contadorMovimientos >= 5) {
    $mensaje.innerHTML = mensaje;
    tableroBloqueado = true;
  }
}
//Funcion, Si coincide resta al contador 1
function funcioncita1() {
  $contador.innerHTML = `CONTADOR: ${contadorMovimientos}/12`;
}
//Funcion, Si las 2 cartas son !== suma al contador 1
function funcioncita2() {
  $contador.innerHTML = `CONTADOR: ${++contadorMovimientos}/12`;
  let contador1 = $contador.innerHTML;
}

function comprobarCoincidencia() {
  let coincidencia =
    primeraCarta.dataset.participante === segundaCarta.dataset.participante;

  if (tableroBloqueado) {
    return;
  }

  coincidencia ? deshabilitarCartas() : devolverCartas();
}

function deshabilitarCartas() {
  primeraCarta.removeEventListener("click", girar);
  segundaCarta.removeEventListener("click", girar);
  resetearBareavle();
}

function devolverCartas() {
  tableroBloqueado = true;
  setTimeout(() => {
    primeraCarta.classList.remove("girar");
    segundaCarta.classList.remove("girar");
    tableroBloqueado = false;
    resetearBareavle();
  }, 700);
}

function cartasClickeables() {
  cartas.forEach((carta) => carta.addEventListener("click", girar));
  mezclarCartas();
}

cartasClickeables();

// Hacer el random

function mezclarCartas() {
  // Recorrer todas las cartas
  // Por cada carta:
  // Quiero generar un numero random
  // Y aplicarselo al style.order

  cartas.forEach((carta) => {
    let numeritoRandomico = Math.floor(Math.random() * 12);
    carta.style.order = numeritoRandomico;
  });
}

//Tengo que hacer un boton para resetear
//Lo importante seria sacarle el girar a todas las cartas lo puedo resolver con:
//Un forEach removiendo girar a todos
//Luego hacer otra vez un mezclar cartas y que sean clickeables
const $reset = document.getElementById("reset");

$reset.addEventListener("click", reset);

function reset() {
  cartas.forEach((carta) => {
    carta.classList.remove("girar");
  });
  cartasClickeables();
  resetTotal();
  resetearBareavle();
}
