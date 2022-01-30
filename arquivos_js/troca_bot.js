let nome = ["Balle Bot", "Batman", "Loritta" ]
let img = ["imagem_animacao balle_bot", "imagem_animacao batman", "imagem_animacao loritta"]
let numero = 0

var titulo = document.querySelectorAll(".titulo_principal")[0]
var imagem = document.querySelectorAll('#imagem_principal')[0]

function proximo(){
    mudar()
    titulo.innerHTML = nome[numero]
    imagem.setAttribute("class", img[numero])
    
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