/*
const funcao = () => "uma expressão de função";

console.log(funcao)

const thisGlobal = () => {
    console.log(this)
}

thisGlobal(0)

*/

const cauculadora = {
    soma: (i,n) => i + n,
    multiplicaçao: (i,n) => i *n,
    divisao: (i,n) => i/n,
    subtraçao: (i,n) => i - n, 

    positivo: (i) => {
        if(i <0){
            return "negativo"
        }
        else if(i > 0){
            return "positivo"
        }
        else{
            return "neutro"
        }
    }
}

console.log(cauculadora.soma(10,5))
console.log(cauculadora.multiplicaçao(10,5))
console.log(cauculadora.divisao(10,5))
console.log(cauculadora.subtraçao(10,5))
console.log(cauculadora.positivo(5))









console.log("-------------")

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
    return"Resultado01"
}

const bla = () => {
    return "Deu Ruim"
}

const b = (i=1, n=1) => i+n
console.log(b(67,3))





console.log(bla())
console.log(ola())
console.log(soma(10,30))
console.log(myfun(0))