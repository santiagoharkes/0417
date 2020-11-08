const form = document.getElementById("form");
const search = document.getElementById("search");
const resultados = document.getElementById("resultados");

const URL = "https://api.lyrics.ovh";

// Funcion de buscar canciones
const getSongs = (value) => {
  fetch(`${URL}/suggest/${value}`)
    .then((valor) => valor.json())
    .then((resultado) => pintarCanciones(resultado))
    .catch((error) => console.log(error));
};

// Funcion de mostrar
const pintarCanciones = (resultado) => {
  console.log(resultado);
  const canciones = `
  <h1> Busquedas relacionadas a ${search.value} </h1>
  <ul>
  ${resultado.data
    .map(
      (valor) => `
  <li>
         <p>${valor.artist.name} - ${valor.title}</p>
        <audio controls>
            <source src=${valor.preview} type="audio/mpeg">
        </audio>
         </li>
  `
    )
    .join("")}
  </ul>`;

  console.log(canciones);

  resultados.innerHTML = canciones;
};

// Funcion iniciar
// getSongs("calamaro");

const iniciar = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const paraBuscar = search.value;

    if (!paraBuscar) {
      return;
    }

    getSongs(paraBuscar);
  });
};

iniciar();
