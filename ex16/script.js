function myfunction(){
var i = Number(document.querySelector("input#inicio").value)
var f = Number(document.querySelector("input#fim").value)
var p = Number(document.querySelector("input#passo").value)
var res = document.querySelector("div#msg")

if(0 == i || 0 == f || 0 == p){
    alert("falso")
}
else if(null == i){
    alert()
}
else{
for(i = i; i <= f; i = i + p){ 
    res.innerHTML = ("contagem: ")
    console.log(i)

}
}
}
