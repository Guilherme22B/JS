function tabuada(){
    var n1 =  Number(document.querySelector("input").value)
    var res = document.querySelector("div#select > select")

    if(n1 == 0){
        alert("por favor, digite um numero!")

        for(c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1 * c}` 
            res.appendChild(item)

}

        
    }
    else{
        
        res.innerHTML = ``


        for(c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1 * c}` 
            res.appendChild(item)

}
    }


}










/*console.log(`${n1} x ${c} = ${n1 * c}`)
res.innerHTML += `<table><tr> ${n1} x ${c} = ${n1 * c} </tr></table>`*/