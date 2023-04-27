function add(){

    var num = Number(document.querySelector("input").value)


    if(num < 1 || num > 100){
        alert("[ERRO]digite um numero entre 1 e 100")
    }
    else{
        var memoria = []
        memoria.push(num)
        console.log(memoria)
    }
}