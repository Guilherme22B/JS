function myfunction(){
var i = Number(document.querySelector("input#inicio").value)
var f = Number(document.querySelector("input#fim").value)
var p = Number(document.querySelector("input#passo").value)
var res = document.querySelector("div#msg")

if(i == 0 || 0 == f || 0 == p){
    alert("[ERRO] faltam dados ")
}
else if(i < f){
    res.innerHTML = `contando...`

    for(c = i; c <= f; c += p){ 
        res.innerText += `${c} \u{1F449} `}

        res.innerHTML += `\u{1F3C1}`
}
else{
    res.innerHTML += `\u{1F3C1}`

    for(c = i; c >= f; c -= p){ 
        res.innerText += `${c} \u{1F448} `}
}
}



