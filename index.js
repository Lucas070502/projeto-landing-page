var leonardo = window.document.getElementById("depoimento-leonardo")
var samantha = window.document.getElementById("depoimento-samantha")
var bruna = window.document.getElementById("depoimento-bruna")
var esquerda = window.document.getElementById("seta-esquerda")
var direita = window.document.getElementById("seta-direita")

function RolarParaDireita(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    direita.style = "display:none"
    esquerda.style = "display:flex"
}

function RolarParaEsquerda(){
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    direita.style = "display:flex"
    esquerda.style = "display:none"
}