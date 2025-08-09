const form = document.querySelector("form");
const emailInput = document.querySelector("input[type='text']");
const passwordInput = document.querySelector("input[type='password']");
const submitButton = document.querySelector("button[type='submit']");
const togglePassword = document.querySelector("button[class='togglePassword']");
const hidePassword = document.querySelector("button[class='hidePassword']");
togglePassword.style.display = "none";
hidePassword.style.display = "none";

function verificarCampos() {
  if (emailInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

passwordInput.addEventListener("input", () => {
  togglePassword.style.display = "block";
  if (passwordInput.getAttribute("type") === "text") {
    hidePassword.style.display = "block";
  }
  if (passwordInput.value.trim() == "") {
    togglePassword.style.display = "none";
    hidePassword.style.display = "none";
  }
});

function mostrarSenha() {
  const tipo =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", tipo);
}

togglePassword.addEventListener("click", () => {
  togglePassword.style.display = "none";
  hidePassword.style.display = "block";
});

hidePassword.addEventListener("click", () => {
  togglePassword.style.display = "block";
  hidePassword.style.display = "none";
});

emailInput.addEventListener("input", verificarCampos);
passwordInput.addEventListener("input", verificarCampos);
togglePassword.addEventListener("click", mostrarSenha);
hidePassword.addEventListener("click", mostrarSenha);
