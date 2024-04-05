const moviesJSON = "https://raw.githubusercontent.com/clissic/movies-json/master/movies.json";
const carouselInner = document.getElementsByClassName("carousel-inner");
const billboardInner = document.getElementsByClassName("billboard-movies");

const featuredBtn = document.getElementById("featured-btn");
const billboardBtn = document.getElementById("billboard-btn");
const ticketBtn = document.getElementById("ticket-btn");

async function fetchMovies(URL) {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    const movies = data;

    let moviesHTML = "";
    let billboardHTML = "";

    movies.forEach((movie) => {
      if (movie.featured === true) {
        moviesHTML += `
                    <div class="carousel-item">
                        <img id="carousel-item-background" src="${movie.background}" alt="${movie.name}-background">
                        <div class="carousel-img-cont">
                            <div class="movie-rating">
                                <p>
                                    ★
                                    <br>
                                    <span>${movie.rate}</span>/10
                                    <br>
                                    <strong>IMDB</strong>
                                </p>
                            </div>
                            <img src="${movie.banner}" alt="${movie.name}-banner">
                        </div>
                        <div class="carousel-text-cont">
                            <div class="carousel-text-cont-desc">
                                <h2>${movie.name}</h2>
                                <hr>
                                <p>${movie.description}</p>
                            </div>
                            <div class="carousel-featured-buttons">
                                <div class="carousel-button-div">
                                    <a href="${movie.trailer}" target="_blank" class="featured-button"><img src="./assets/img/play-svg.svg" alt="trailer button"></a>
                                    <p>Ver trailer</p>
                                </div>
                                <div class="carousel-button-div">
                                    <a href="./pages/tickets.html" class="featured-button"><img src="./assets/img/ticket-svg.svg" alt="ticket button"></a>
                                    <p>Comprar ticket</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
      }

      billboardHTML += `
      <div class="movie-card">
        <p>${movie.name}</p>
        <h6>${movie.language}</h6>
        <div class="movie-card-img" style="background-image: url('${movie.banner}');"></div>
        <a href="./pages/tickets.html">Comprar ticket</a>
      </div>
      `;
    });

    carouselInner[0].innerHTML = moviesHTML;
    billboardInner[0].innerHTML = billboardHTML;

    const carouselItem = document.getElementsByClassName("carousel-item");
    carouselItem[0].classList.add("active");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

featuredBtn.addEventListener("click", () => {
  if (!featuredBtn.classList.contains("active")) {
    featuredBtn.classList.add("active");
    billboardBtn.classList.remove("active");
  }
})

billboardBtn.addEventListener("click", () => {
  if (!billboardBtn.classList.contains("active")) {
    billboardBtn.classList.add("active");
    featuredBtn.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  await fetchMovies(moviesJSON);
});
