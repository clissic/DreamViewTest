const formFinishBtn = document.getElementById("form-finish");
const formBackBtn = document.getElementById("form-back");
const formAlert = document.getElementById("form-alert");

const telephoneInput = document.getElementById("telephone");
const telephonePattern = /^\d{3}-\d{3}-\d{3}$/;

telephoneInput.addEventListener("input", () => {
  let phoneNumber = telephoneInput.value.replace(/\D/g, "");
  phoneNumber = phoneNumber.substring(0, 9);
  phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3");
  telephoneInput.value = phoneNumber;
});

formFinishBtn.addEventListener("click", (e) => {
  e.preventDefault()
  const fullNameValue = document.getElementById("full-name").value;
  const emailValue = document.getElementById("email").value;
  const telephoneValue = document.getElementById("telephone").value;

  const ticket = JSON.parse(localStorage.getItem("ticket"));

  const nameValue = fullNameValue.split(" ")[0];
  const dateValue = ticket.show.split(" ")[0];
  const timeValue = ticket.show.split(" ")[1];

  if (fullNameValue === "" || emailValue === "" || telephoneValue === "") {
    formAlert.classList.remove("not-displayed");
    console.log("entro aca")
  } else {
    ticketInner.innerHTML = `
                      <div class="finished">
                          <h5>Comprar ticket</h5>
                          <h2>¡Felicitaciones ${nameValue}!</h2>
                          <p class="emoji-ticket">🎫</p>
                          <h4>Tu entrada para la función ${dateValue} <br> a las ${timeValue} ha sido canjeada.</h4>
                          <h4>¡Te esperamos!</h4>
                      </div>
        `;

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 5000);
  }
});

formBackBtn.addEventListener("click", () => {
    location.reload();
})