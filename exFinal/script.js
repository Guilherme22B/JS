var memoria = []
function adicionar(){

    var num = Number(document.querySelector("input").value)
    var res = document.querySelector("div#res")
    var selec = document.querySelector("select")
    console.log(memoria)


    if(num > 100 || num <= 0){
        alert("[ERRO]digite um numero entre 1 e 100")
    }
    else{
        memoria.push(num)
        var opt = document.createElement('option')
        opt.text = `valor ${num} adicionado`
        selec.appendChild(opt)
        }
}


function fim(){
    res.innerHTML += `o menor numero é`
    alert("olá")
}








    /*
    var qvalor = 0 
    var maior = 0 
    var menor = 0 
    var media = 0 
    */

    /*
    if(num >= maior){
        maior = num
        console.log(menor)
    }

    if(num <= menor){
        menor = num
        console.log(menor)
    }

    if(num == num){
        media = media + num
    }
    */