var agora = new Date()
var hora = agora.getHours
console.log(`agora são exatamete ${agora}hrs`)

if(hora < 12){
    console.log('bom dia')
}
else if (hora >= 12) {
    console.log('boa tarde')
} 
else {
    console.log('boa noite')
}
