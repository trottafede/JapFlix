Pautas:
Modificar el sitio web adjunto para lograr cumplir con las siguientes pautas:

1) Cuando la página cargue, deberá traer el listado de información sobre películas disponible en 
https://japceibal.github.io/japflix_api/movies-data.json, pero no mostrarlo al usuario.

2) Cuando el usuario presiona el botón buscar, y si previamente ingresó algún valor en el campo de búsqueda, deberá mostrar un listado con las películas que coincidan con dicha búsqueda en sus atributos de title o genres o tagline u overview. La información a mostrar en este punto será: title, tagline, y vote_average (en formato de "estrellas").

3) Cuando el usuario pulse en alguna de las películas mostradas, se deberá desplegar un contenedor superior con la siguiente información de dicha película: title, overview y lista de genres.


4) Añadir en lo anterior un botón con un desplegable que contenga el año de lanzamiento (sin el mes ni el día), la duración del largometraje, el presupuesto con el que contó y las ganancias obtenidas


ATENCIÓN!!!:

Las imágenes proporcionadas en todos los casos son meramente ilustrativas, y están presentes para brindar entendimiento visual sobre cada pauta. No se espera que el resultado cumpla con los mismos criterios de estilo específicos. 

//to do
2) 
  a) Arreglar filtro

3)
  a) Adaptarlo con un top offcanvas de bootstrap.

4)
  a) quitarle mes y dia x
  b) a la duracion agregarle "mins" x
  c) a las ganancias y presupuesto agregarle signo de pesos x

5) Responsive?

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}