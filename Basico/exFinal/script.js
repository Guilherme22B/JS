var memoria = []
var maiorv = 0
var menorv = 101
var media = 0


function adicionar(){
    var num = Number(document.querySelector("input").value)
    var res = document.querySelector("div#res")
    var selec = document.querySelector("select")
    console.log(memoria)


        for(c = 0; c <= 100; c++){
            if(num !== memoria[c]){
            }
            else{
                alert("[ERRO] Numero repitido")
                var num = null
            }
        }
 


    if(num > 100 || num <= 0){
        alert("[ERRO]digite um numero entre 1 e 100")
    }
    else{

        if(num > maiorv){
            maiorv = num
        }

        if(num < menorv){
            menorv = num
        }

        media = media + num

        memoria.push(num)
        var opt = document.createElement('option')
        opt.text = `valor ${num} adicionado`
        selec.appendChild(opt)
        }
}


function fim(){
    if(maiorv == 0){
        alert("[Erro] digite um valor")
    }
    else{

        res.innerHTML = ``
        res.innerHTML += `o maior numero é: ${maiorv} <br>`
        res.innerHTML += `o menor numero é: ${menorv} <br>`
        res.innerHTML += `a media é: ${media / (memoria.length)} <br>`
    }

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