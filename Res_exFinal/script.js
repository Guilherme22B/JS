let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n){
    if(Number(n)  >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

} 
function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionada `
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        alert("valor invalido ou já encontrado na lista")
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert("adicione valores antes de finalizar")
    }else{
        res.innerHTML = ''
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0 
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot


        let tot = valores.length
        res.innerHTML += `<p> ao todo temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p> o maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> o menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> a soma é ${soma}</p>`
        res.innerHTML += `<p> a media é ${media}</p>`

    }
}