
const contenedor = document.querySelector('#contenedor');

const imagen = document.createElement('img');

imagen.src = "assets/imagen.jpg";

imagen.id = "img";

// elemento.classList.add("clase")
// elemento.classList.remove("clase")

// imagen.classList.toggle('deshabilitado')
// imagen.classList.toggle('deshabilitado')
// imagen.classList.toggle('deshabilitado')

imagen.addEventListener("click", pepito)


contenedor.appendChild(imagen);
    



function pepito(e) {
    e.target.classList.toggle('deshabilitado')
}


/////


const parrafos = document.querySelectorAll('p');

const cantidad = parrafos.length;

for (let i = 0; i < cantidad; i++ ) {
    parrafos[i].addEventListener('click', callbackParrafos)
}

function callbackParrafos(e) {
    e.target.classList.toggle('deshabilitado')
}


/////////////


const peso = document.querySelector('#peso');
const resultado = document.querySelector('#resultado');

peso.addEventListener('input', callbackPeso)

function callbackPeso(e) {
    resultado.textContent = Number(e.target.value) / 6 ;
}
