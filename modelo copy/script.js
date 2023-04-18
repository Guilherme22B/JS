function cargea(){
var msg = document.querySelector('div#msg')
var img = document.querySelector('div img')
var bgc = document.querySelector('body')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`

if(hora <= 12 ){
    img.src = 'imagens/manha.jpg'
    bgc.style.background = 'rgb(196, 194, 194)'
}
else if (hora > 12 && hora <= 18) {
    img.src = 'imagens/tarde.jpg'
    bgc.style.background = '#e2cd9f'
} else {
    img.src = 'imagens/noite.jpg'
    bgc.style.background = 'rgb(54, 54, 54)'
}
}