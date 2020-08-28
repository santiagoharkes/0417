// let obj = {}

// let obj2 = obj;
// // obj2 = {
// //     lalala: "lalala"
// // }


// obj2['lalala'] = "lalala"

// console.log(obj)

// let numero = 2

// let numero2 = numero

// numero2 = 8

// console.log(numero)


const arrayMock = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

// const arrayMapeado = arrayMock.map((item)=> {
//     return `<p>${item}</p>`
// })

// console.log(arrayMapeado)

// const arrayFiltrado = arrayMock.filter((item)=> {
//     return item.length > 6;
// })

// console.log(arrayFiltrado)

// const arrayNum = [1,2,3,4,5];

// const arrayReducido = arrayNum.reduce((a, b)=> {
//     console.log(a, "a")
//     console.log(b, "b")
//     return a + b;
// })

// console.log(arrayReducido)

// const asistentes = [
//     {
//         nombre: "juan",
//         fueAlBano: true
//     },
//     {
//         nombre: "ana",
//         fueAlBano: false
//     },
//     {
//         nombre: "juana",
//         fueAlBano: true
//     },
// ]

// const asistentesBano = asistentes.reduce((acu, item) => {
//     const acu2 = typeof acu === 'object' ? (acu.fueAlBano ? acu.nombre : '') : acu;
//     const item2 = item.fueAlBano ? (' ,' + item.nombre) : '';
//     return acu2 + item2;
// })

// console.log('Los asistentes que fueron al baño son: ' + asistentesBano);

const autos = [
    {
        nombre: "autito",
        precio: '$1000'
    },
    {
        nombre: "autito2",
        precio: '$2000'
    },
    {
        nombre: "autito3",
        precio: '$30000'
    },
    {
        nombre: "autito4",
        precio: '$4000'
    },
]

// const resAutos = autos.reduce((acu, item) => {
//     const itemPrecio = Number(item.precio.substring(1));
    
//     const resultado = acu.precio > itemPrecio ? acu : Object.assign(item , { precio: itemPrecio });
//     return resultado;
// }, {})

// const resAutos = autos.reduce((acu, item) => {
//     const itemPrecio = Number(item.precio.substring(1));
//     const acuPrecio = Number(acu.precio.substring(1));
//     const resultado = acuPrecio > itemPrecio ? acu : item;
//     return resultado;
// })

// console.log(resAutos)



////// BUBBLE Y CAPTURING


const uno = document.querySelector('#uno');
const dos = document.querySelector('#dos');
const tres = document.querySelector('#tres');

uno.addEventListener('click', fnUno, true);

dos.addEventListener('click', function(e) {
    console.log('dos', e.target, this)
}, true)

tres.addEventListener('click', function(e) {
    console.log('tres', e.target, this)
}, true)

function fnUno(e) {
    // e.stopPropagation()
    console.log('uno', e.target, this)
}