class Dev{
    constructor(trabalho,nome, idade, principallinguagem){
        this.trabalho = trabalho;
        this.nome = nome;
        this.idade = idade;
        this.principallinguagem = principallinguagem;
    }
    
saudacao(){
    console.log(`oi! sou de dev ${this.trabalho}, trabalho com ${this.principallinguagem} e me chamo ${this.nome}\n\n`)
    }
}

const dev = new Dev("FrontEnd", "Guilherme", 25, "JavaScipt")

console.log(dev)
dev.saudacao();
