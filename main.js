
function abrirMenu() {
  let mostrarMenu = document.querySelector(".menuAberto");
  mostrarMenu.style.top = "0"
}

function fecharMenu() {
  let mostrarMenu = document.querySelector(".menuAberto");
  mostrarMenu.style.top = "-100%";
}

function validarForm() {
  let emailInput = document.querySelector("#emailClient");
  let checkboxInput = document.querySelector("#accept");

  if (checkboxInput.checked) {
    alert("Agora ficará por dentro das ofertas atráves do seu e-mail: " + emailInput.value);
  } alert(
      "Por favor, concorde com os termos e condições antes de enviar o e-mail."
    );
  
}

