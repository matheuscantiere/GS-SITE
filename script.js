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

//Carrosel

let itens = document.querySelectorAll('.slider .item');
let proximo = document.getElementById('proximo');
let anterior = document.getElementById('anterior');
    
    let imagem = 0; //No caso é a terceira imagem <item3>
    //Função dos efeitos ao passar o carrosel e os efeitos de blur e "perspectiva"
    function efeitosCarrosel(){
        let stt = 0;
        itens[imagem].style.transform = `none`;
        itens[imagem].style.zIndex = 1;
        itens[imagem].style.filter = 'none';
        itens[imagem].style.opacity = 1;
        for(var i = imagem + 1; i < itens.length; i++){
            stt++;
            itens[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            itens[i].style.zIndex = -stt;
            itens[i].style.filter = 'blur(5px)';
            itens[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = imagem - 1; i >= 0; i--){
            stt++;
            itens[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            itens[i].style.zIndex = -stt;
            itens[i].style.filter = 'blur(5px)';
            itens[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    //Deixar as setas funcionais
    efeitosCarrosel();
    proximo.onclick = function(){   //Passa para direita "Proximo"
        imagem = imagem + 1 < itens.length ? imagem + 1 : imagem;
        efeitosCarrosel();
    }
    anterior.onclick = function(){    //Passa para a esquerda "Anterior/Voltar"
        imagem = imagem - 1 >= 0 ? imagem - 1 : imagem;
        efeitosCarrosel();
    }