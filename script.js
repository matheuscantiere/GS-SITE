const btnScrollTop = document.querySelector(".btn-scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    btnScrollTop.classList.add("show-btn-scroll-top");
  } else {
    btnScrollTop.classList.remove("show-btn-scroll-top");
  }
});

btnScrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function enviar() {
    // Pega o valor do input de e-mail
    var email = document.getElementById("emailInput").value;

    // Validação simples do e-mail (apenas verifica se contém '@')
    if (email && email.includes('@')) {
        // Aqui você pode fazer algo com o e-mail, como enviar para o servidor
        alert("E-mail para " + email + " enviado com sucesso!");
        return true; // Permite o envio do formulário
    } else {
        alert("Por favor, insira um e-mail válido.");
        return false; // Impede o envio do formulário
    }
}