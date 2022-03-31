let nome = ["Balle Bot", "Batman", "Loritta" ]
let img = ["imagem_animacao balle_bot", "imagem_animacao batman", "imagem_animacao loritta"]
let numero = 0

var titulo = document.querySelectorAll(".titulo_principal")[0]
var imagem = document.querySelectorAll('#imagem_principal')[0]

var fundo = ['linear-gradient(68.15deg, #8b3542 10%, #45978e 90%)', 'linear-gradient(68.15deg, #5e5d5d 10%, #1a5c55 90%)', 'linear-gradient(68.15deg, #421e24 10%, #0a8072 90%)']

function proximo(){
    mudar()
    titulo.innerHTML = nome[numero]
    imagem.setAttribute("class", img[numero])
    document.body.style.background = fundo[numero]
    d
}

function mudar(){
    if(numero == 0){
        numero = 1
    }else if (numero == 1){
        numero = 2
    }else{
        numero = 0
    }
}

function anterior(){
    subtrair()
    titulo.innerHTML = nome[numero]
    imagem.setAttribute("class", img[numero])
    document.body.style.background = fundo[numero]
}

function subtrair(){
    if(numero == 1){
        numero = 0
    }else if (numero == 0){
        numero = 2
    }else{
        numero = 1
    }
}