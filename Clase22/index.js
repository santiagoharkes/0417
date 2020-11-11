const pewito = {
  nombre: "Gandalf",
  ladrido: "Guau",
  edad: 7,

  hablar: function () {
    console.log(this); // Esto es el objeto
  },

  ladrar: () => {
    console.log(this); // Esto es window
  },
};

function queEsThis() {
  console.log(this);
}

// Tarea:
// Ver por qué la Arrow no toma al objeto como This

// const persona = {
//   nombre: "Dani",
//   ladrido: "SE ROMPIOOOOOOOOOOOO",
//   edad: 7,

//   hablar: function () {
//     console.log(this);
//     // console.log(`Hola mi nombre es ${this.nombre} y digo ${this.ladrido}`);
//   },
// };

// const queDiceDani = persona.hablar;
// console.log(persona.hablar());
// console.log(queDiceDani());
