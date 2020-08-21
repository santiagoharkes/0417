const elementoAzul = document.querySelector("#azul");
const elementoRojo = document.querySelector("#rojo");

const azul = {
    nombre: 'Juan Carlos Azul',
    vida: 100,
    fuerza: 10,
    elemento: elementoAzul,
}

const rojo = {
    nombre: 'Juan Carlos Rojo',
    vida: 100,
    fuerza: 10,
    elemento: elementoRojo,
}

azul.elemento.addEventListener('click', pelea);
rojo.elemento.addEventListener('click', pelea);

function pelea() {
    console.log("estoy peleamdo")
}

/*
1. Al hacer click sobre un peleador, el otro peleador deberá recibir el golpe (perder vidas)
2. Vamos a evitar el código duplicado, si los dos peleadores hacen algo muuuy similar, podemos crear una funcion que trabaje con ambos
3. Cuando la vida de uno de los luchadores llegue a cero o menos, habrá que avisar quién ganó la pelea (alert, console.log, modal, elemento html)
4. Bajar la opacidad del color de los luchadores, a medida que pierden vida
*/
