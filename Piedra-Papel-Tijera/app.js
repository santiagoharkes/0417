// Unica funcion que crea el juego, es como un componente en React :O
const jueguitoPiola = () => {
  let miPuntaje = 0;
  let suPuntaje = 0;

  const mostrarJuego = () => {
    const botonPlay = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const partido = document.querySelector(".partido");

    botonPlay.addEventListener("click", () => {
      introScreen.classList.add("desvanecer");
      partido.classList.add("aparecer");
    });
  };

  const empezarJuego = () => {
    const opciones = document.querySelectorAll(".opciones button");
    const manoJugador = document.querySelector(".mano-jugador");
    const manoComputadora = document.querySelector(".mano-computadora");
    const manos = document.querySelectorAll(".manos img");

    manos.forEach((mano) => {
      mano.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    const opcionesComputadora = ["piedra", "papel", "tijera"];

    opciones.forEach((option) => {
      option.addEventListener("click", function () {
        const ganador = document.querySelector(".ganador");

        const numeroComputadora = Math.floor(Math.random() * 3);
        const eleccionComputadora = opcionesComputadora[numeroComputadora];

        manoJugador.src = `./assets/piedra.png`;
        manoComputadora.src = `./assets/piedra.png`;
        manoJugador.style.animation = "shakePlayer 2s ease";
        manoComputadora.style.animation = "shakeComputer 2s ease";
        ganador.textContent = "A ver...";

        setTimeout(() => {
          compararManos(this.dataset.eleccion, eleccionComputadora);
          manoJugador.src = `./assets/${this.dataset.eleccion}.png`;
          manoComputadora.src = `./assets/${eleccionComputadora}.png`;
        }, 2000);
      });
    });
  };

  const actualizarPuntajes = () => {
    const puntajeJugador = document.querySelector(".player-score p");
    const puntajeComputadora = document.querySelector(".computer-score p");
    puntajeJugador.textContent = miPuntaje;
    puntajeComputadora.textContent = suPuntaje;
  };

  // Esta función para comparar manos es muy cavernícola, refactorizar plisssss
  const compararManos = (eleccionJugador, eleccionComputadora) => {
    const ganador = document.querySelector(".ganador");
    if (eleccionJugador === eleccionComputadora) {
      ganador.textContent = "Un embole, empataron perri";
      return;
    }
    if (eleccionJugador === "piedra") {
      if (eleccionComputadora === "tijera") {
        ganador.textContent = "VAMOOOO GANASTE AMIWI";
        miPuntaje++;
        actualizarPuntajes();
        return;
      } else {
        ganador.textContent = "Al horno, perdiste :(";
        suPuntaje++;
        actualizarPuntajes();
        return;
      }
    }
    if (eleccionJugador === "papel") {
      if (eleccionComputadora === "tijera") {
        ganador.textContent = "Al horno, perdiste :(";
        suPuntaje++;
        actualizarPuntajes();
        return;
      } else {
        ganador.textContent = "VAMOOOO GANASTE AMIWI";
        miPuntaje++;
        actualizarPuntajes();
        return;
      }
    }
    if (eleccionJugador === "tijera") {
      if (eleccionComputadora === "piedra") {
        ganador.textContent = "Al horno, perdiste :(";
        suPuntaje++;
        actualizarPuntajes();
        return;
      } else {
        ganador.textContent = "VAMOOOO GANASTE AMIWI";
        miPuntaje++;
        actualizarPuntajes();
        return;
      }
    }
  };

  mostrarJuego();
  empezarJuego();
};

jueguitoPiola();
