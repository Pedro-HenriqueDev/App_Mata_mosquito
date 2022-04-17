var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var nivel = window.location.search
var criaMosquitoTempo = 1500
nivel = nivel.replace('?', '')
if (nivel === 'normal') {
    var criaMosquitoTempo = 1500
} if(nivel === 'dificil') {
    var criaMosquitoTempo = 1000
} if(nivel === 'chucknorris') {
    var criaMosquitoTempo = 750
}
function ajustaTamanhoPalco() {
 altura = window.innerHeight
 largura = window.innerWidth

 console.log(largura, altura)

}

ajustaTamanhoPalco()

var cronometro =  setInterval(function(){
    tempo -= 1

    if(tempo < 0 ) {
        clearInterval(cronometro)
        clearInterval(cria_mosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)

function posicaoRandomica() {


//remover mosquito anterior (caso exita)
if(document.getElementById('mosquito')) {
document.getElementById('mosquito').remove()

if(vidas > 3) {
    window.location.href = 'fim_de_jogo.html'

} else {
    
document.getElementById('v' + vidas).src='./assets/img/coracao_vazio.png'

vidas++
}
}
var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY
// (?) se for
// (:) se não 

console.log(posicaoX, posicaoY)

var mosquito = document.createElement('img')
mosquito.src = "./assets/img/mosquito.png"
mosquito.className =  tamanhoMosquito() +' '+ ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function() {
    this.remove()
}


document.body.appendChild(mosquito)

tamanhoMosquito()
}

function tamanhoMosquito() {
    
var tamanho_randomico = Math.floor(Math.random() * 3)

switch(tamanho_randomico) {
    case 0:
        return 'mosquito_1'
    case 1:
        return 'mosquito_2'
    case 2:
        return 'mosquito_3'
}

}

function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2)

switch(lado) {
    case 0:
        return 'ladoA'
    case 1:
        return 'ladoB'
}
}

