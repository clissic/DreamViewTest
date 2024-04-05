const moviesJSON = "https://raw.githubusercontent.com/clissic/movies-json/master/movies.json";

const namesInner = document.getElementById("names");
const ticketInner = document.getElementById("tickets");
const formNextBtn = document.getElementById("form-next");
const formRestart = document.getElementById("form-restart");

async function fetchMovies(URL) {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    const movies = data;

    let namesHTML = "";

    movies.forEach((movie) => {
      namesHTML += `
        <option value="${movie.name}">${movie.name}</option>
        `;
      namesInner.innerHTML = namesHTML;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

formNextBtn.addEventListener("click", () => {

  const namesValue = document.getElementById("names").value
  const showsValue = document.getElementById("shows").value
  const seatsValue = document.getElementById("seats").value

  const ticket = {
    name: namesValue,
    show: showsValue,
    seat: seatsValue
  }

  localStorage.setItem("ticket", JSON.stringify(ticket))
  ticketInner.innerHTML = `
    <h2 class="tickets-title">Comprar ticket</h2>
    <h3 class="tickets-subtitle">Completa tu información personal</h3>
    <div class="tickets">
        <form class="form">
            <div class="select-div">
                <label for="full-name">Nombre completo</label>
                <input id="full-name" type="text" minlength="4" required>
            </div>
            <div class="select-div">
                <label for="email">E-mail</label>
                <input id="email" type="email" required>
            </div>
            <div class="select-div">
                <label for="telephone">Teléfono</label>
                <input id="telephone" type="tel" minlength="9" required>
            </div>
            <p id="form-alert" class="form-alert not-displayed">¡Debe completar todos los datos!</p>
            <div class="form-buttons">
                <button type="submit" id="form-finish" class="form-finish">Finalizar</button>
                <button id="form-back" class="form-secondary-btn">Volver</button>
            </div>
        </form>
    </div>
    `;

  const script = document.createElement("script");
  script.src = "../assets/js/formFinish.js";
  document.body.appendChild(script);
});

formRestart.addEventListener("click", () => {
  location.reload()
})

document.addEventListener("DOMContentLoaded", async () => {
  await fetchMovies(moviesJSON);
});
