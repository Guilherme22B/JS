let num = (document.querySelector("input#fnum"))
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []
 
function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
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
    alert(num.value)
    
    if(isnumero(num.value) && inlista(num.value, valores)){
        alert("tudo ok")
    }else{
        alert("valor invalido ou já encontrado na lista")
    }
}