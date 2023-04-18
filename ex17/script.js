function res(){
    
var n1 =  Number(document.querySelector("input").value)
var res = document.querySelector("div#msg")


for(c = 1; c <= 10; c++){
    console.log(`${n1} x ${c} = ${n1 * c}`)
    document.write(res.innerHTML)
}
}