let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    
    if (prevScrollPos > currentScrollPos) {
        // Rolagem para cima:
        document.querySelector("header").style.top = "0";
    } else {
        // Rolagem para baixo:
        document.querySelector("header").style.top = "-250px";
        document.getElementById("subMenuJoias").style = "none";
        document.getElementById("subMenuCasamento").style = "none";
        document.getElementById("subMenuRelogios").style = "none";
        document.getElementById("subMenuAcessorios").style = "none";
        document.getElementById("subMenuMasculino").style = "none";
        document.getElementById("subMenuColecoes").style = "none";
        document.getElementById("subMenuPresentes").style = "none";
    }

    prevScrollPos = currentScrollPos;
}

