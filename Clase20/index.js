const postContainer = document.querySelector(".posts-container");
const loading = document.querySelector(".loader");
const inputFilter = document.querySelector("#filter");

let limite = 5;
let pagina = 1;

// HACEMOS EL FETCH
const getPosts = async () => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${pagina}&_limit=${limite}`
  );
  const data = await resp.json();
  return data;
};

// PINTAR POSTS
const pintarPosts = (posts) => {
  const postsHTML = posts
    .map((valor) => {
      return `<div class="post">
        <div class="numerito">${valor.id}</div>
        <div class="post-info">
          <h2 class="post-title">${valor.title}</h2>
          <p class="post-body">
          ${valor.body}
          </p>
        </div>
      </div>`;
    })
    .join("");

  postContainer.innerHTML += postsHTML;
};

// MOSTRAR LOADING

// LA FUNCION INICIAR
function iniciarPerri() {
  window.addEventListener("DOMContentLoaded", async () => {
    let posts = await getPosts();
    pintarPosts(posts);
  });

  window.addEventListener("scroll", () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
      console.log("Estoy en el final?");
    }
  });
}

// LLAMAR A INICIAR
iniciarPerri();

// PROXIMOS PASOS A SEGUIR

// Cuando llego abajo de todo,
// Quiero que aparezca el loading
// Quiero que cargue otros 5
// Quiero que desaparezca el loading

// Ver destructuring
// const {scrollTop, clientHeight, scrollHeight } = document.documentElement
