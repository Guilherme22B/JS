/*
const funcao = () => "uma expressão de função";

console.log(funcao)

const thisGlobal = () => {
    console.log(this)
}

thisGlobal(0)

*/

function myfun(i){
    if(i < 0){
        return "negativo"
    }
    else if(i > 0){
        return "Positivo"
    }
    else{
        return "neutro"
    }
}

function soma(a,b){
    return a + b
}

const ola = function(){
    return"vai se foder seu loki"
}

const bla = () => {
    return "Deu Ruim"
}


console.log(bla())
console.log(ola())
console.log(soma(10,30))
console.log(myfun(0))