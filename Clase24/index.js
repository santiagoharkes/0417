// function crearPersona(nombre, edad) {
//   this.nombre = nombre;
//   this.edad = edad;
// }

// crearPersona.prototype.cunplianito = function () {
//   return this.edad++;
// };

// crearPersona.prototype.decirNombre = function () {
//   console.log(`HOla soy ${this.nombre}`);
// };

// function crearAlumno(nombre, edad, legajo) {
//   crearPersona.call(this, nombre, edad);
//   this.legajo = legajo;
// }

// crearAlumno.prototype = Object.create(crearPersona.prototype);

// crearAlumno.prototype.decirLegajo = function () {
//   console.log(`Mi legajo es ${this.legajo}`);
// };

// const alumnito = new crearAlumno("Jaimito", 45, 2302343845);

// console.log(alumnito);

// const objetito = {
//   nombre: "Pedro",
//   edad: 45,
//   decirNombre: function () {
//     console.log("Hola");
//   },
// };

// objetito.nombre
// objetito.edad
// objetito.decirNombre()

// const alumnito = new crearAlumno("Jaimito", 45, 2302343845);

// const alumnito = {
//   nombre: "Jaimito",
//   edad: 45,
//   legajo: 2302343845,
//   decirLegajo: function () {
//     console.log(`Mi legajo es ${this.legajo}`);
//   },
// };

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// TAREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
// Crear usuarios a partir de inputs
// CON LA VERSION ANTERIOR A CLASS
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

class crearPersona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  cumplianito() {
    return this.edad++;
  }
}

const persona = new crearPersona("Jupiter", 56456);

class crearAlumno extends crearPersona {
  constructor(nombre, edad, legajo) {
    super(nombre, edad);
    this.legajo = legajo;
  }

  decirLegajo() {
    console.log(`Mi legajo es ${this.legajo}`);
  }
}

const alumnito = new crearAlumno("Juan", 45656, 1);
