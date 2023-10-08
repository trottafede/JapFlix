document.addEventListener("DOMContentLoaded", () => {
    const inputBuscar = document.getElementById("inputBuscar");
    const buttonBuscar = document.getElementById("btnBuscar");
    const listaPeliculas = document.getElementById("lista");
    
    const contenedorInfo = document.createElement("div");
    contenedorInfo.classList.add("container", "mt-3", "border", "p-3", "bg-light", "ayuda");
    contenedorInfo.style.display = "none"; // Oculta el contenedor al principio

fetch('https://japceibal.github.io/japflix_api/movies-data.json')
  .then(response => response.json())
  .then(data => {
        const peliculasData = data;

        function mostrarPeliculas(query) {
          listaPeliculas.innerHTML = '';
      
          const peliculasFiltradas = peliculasData.filter(peliculas => {
              const { title, genres, tagline, overview } = peliculas;
              const buscarCaracteristica = query.toLowerCase();
              return (
                 title.toLowerCase().includes ( buscarCaracteristica) ||
                  genres[0].name.toLowerCase().includes(buscarCaracteristica) ||
                  tagline.toLowerCase().includes(buscarCaracteristica) ||
                  overview.toLowerCase().includes(buscarCaracteristica)
              );
          });
      
          peliculasFiltradas.forEach(peliculas => {
              const divPeliculas = document.createElement('div');
              divPeliculas.classList.add('peliculas');
               divPeliculas.addEventListener("click", () => {
                funcionDeChiara(peliculas);
              }); 
              divPeliculas.innerHTML = `
                  <h2>${peliculas.title}</h2>
                  <p>${peliculas.tagline}</p>
                  <p>Calificacion:<span class="estrellas-color"> ${obtenerEstrellas(peliculas.vote_average)}</span></p>
                  <hr>`;
              listaPeliculas.appendChild(divPeliculas);
          });
}

function funcionDeChiara(pelicula) {
  let generos = "";
  pelicula.genres.map((genero,index) => {
    generos = generos + genero.name + " " ;
  } )
  contenedorInfo.innerHTML = ` 
  <h2>${pelicula.title}</h2>
    <p>${pelicula.overview}</p>
    <p><strong>Géneros:</strong> ${generos}</p>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
       Mas información
     </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Year : ${pelicula.release_date}</a></li>
        <li><a class="dropdown-item" href="#">Runtime : ${pelicula.runtime}</a></li>
        <li><a class="dropdown-item" href="#">Budget : ${pelicula.budget}</a></li>
        <li><a class="dropdown-item" href="#">Revenue : ${pelicula.revenue}</a></li>
      </ul>
    </div>
  `;

  contenedorInfo.style.display = "block";
  document.body.insertBefore(contenedorInfo, document.getElementById("MyTitle"));
}

function obtenerEstrellas(rating){
    const newRating = rating/2;
    const redondear = Math.round(newRating );
    const stars = '★'.repeat(redondear);
    return stars
}

buttonBuscar.addEventListener('click', () => {
    const buscarTermino = inputBuscar.value.trim();
    if(buscarTermino){
        mostrarPeliculas(buscarTermino);
    }
});
})



});

      
          
