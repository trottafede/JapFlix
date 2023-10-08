const linkApi = "https://japceibal.github.io/japflix_api/movies-data.json"
// `` ´´


/*
  1) Cuando la página cargue, deberá traer el listado de información sobre películas disponible en 
  https://japceibal.github.io/japflix_api/movies-data.json, pero no mostrarlo al usuario.
  
  *** Completado ***
*/
let movies = [];
document.addEventListener("DOMContentLoaded", async () => {
  const result = await fetch("https://japceibal.github.io/japflix_api/movies-data.json");
  movies = await result.json();
  
  const buscarBTN = document.getElementById("btnBuscar");
  buscarBTN.addEventListener("click", handleSearchBTN)
  console.log(movies);
})


/*a

2) 
  Cuando el usuario presiona el botón buscar,
  y si previamente ingresó algún valor en el campo de búsqueda, 
  deberá mostrar un listado con las películas que coincidan con 
  dicha búsqueda en sus atributos de title o genres o tagline u overview. 
  La información a mostrar en este punto será: title, tagline, 
  y vote_average (en formato de "estrellas").
*/

// agregar click listener al boton id="inputBuscar"
// mostrar en UL con id="lista" lo que el usuario ponga en el input 

function handleSearchBTN() {
  const buscar = document.getElementById('inputBuscar').value.toLowerCase();
  const album = document.getElementById("lista");
  album.innerHTML = "";


  for (const movie of movies) {
    // cambiar .includes por ===
    // || movie.genres.toString().toLowerCase().includes(buscar)
    if (movie.title.toLowerCase() === buscar || movie.genres[0].name.toLowerCase() === buscar || movie.tagline.toLowerCase() === buscar || movie.overview.toLowerCase() === buscar ){ 
        const li = document.createElement("li");
        li.textContent = `
        ${movie.title} -
        ${movie.tagline}`;
        
      
      var ejemplo = movie.title;
      const prueba = (ejemplo) => {
        console.log(ejemplo);
      }

      li.addEventListener("click", prueba(ejemplo));
      
      album.appendChild(li);
    }
  }    

}

const showInfoOfMovie = (movie) => {
  console.log(movie);
// let modal =  `
// <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>
// <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
//   <div class="offcanvas-header">
//     <h5 class="offcanvas-title" id="offcanvasTopLabel">The Lord of the Rings: The Return of the King</h5>
//     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//   </div>
//   <div class="offcanvas-body">
//     Aragon is revealed
//     <hr>
//     Adventure - Fantasy - Action
//   </div>
// </div>`

}
document.addEventListener("DOMContentLoaded", function () {
    const lista = document.getElementById("lista");
    const contenedorInfo = document.createElement("div");
    contenedorInfo.classList.add("container", "mt-3", "border", "p-3", "bg-light");
    contenedorInfo.style.display = "none"; // Oculta el contenedor al principio
  
    // Función para mostrar la información de la película
    function mostrarInformacionPelicula(pelicula) {
      contenedorInfo.innerHTML = `
        <h2>${pelicula.title}</h2>
        <p>${pelicula.overview}</p>
        <p><strong>Géneros:</strong> ${pelicula.genres.join(", ")}</p>
      `;
  
      contenedorInfo.style.display = "block";
    }
  
    // Función para crear un elemento de lista de película
    function crearElementoPelicula(pelicula) {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item", "list-group-item-action");
      listItem.textContent = pelicula.title;
  
      listItem.addEventListener("click", () => {
        mostrarInformacionPelicula(pelicula);
      });
  
      return listItem;
    }
  
    // Cargar datos JSON desde la URL
    fetch("https://japceibal.github.io/japflix_api/movies-data.json")
      .then((response) => response.json())
      .then((data) => {
        // Ahora data contiene el arreglo de películas desde la URL
        data.forEach((pelicula) => {
          lista.appendChild(crearElementoPelicula(pelicula));
        });
      })
      .catch((error) => {
        console.error("Error al cargar los datos JSON:", error);
      });
  
    document.body.insertBefore(contenedorInfo, document.querySelector("footer"));
  });
  