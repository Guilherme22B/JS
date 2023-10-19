///calbacks

/*
Em JavaScript, um callback é uma função que você passa como argumento para outra função. Essa função é executada após a conclusão de uma tarefa, geralmente uma operação assíncrona, um evento específico ou uma ação condicional. Os callbacks são amplamente usados para lidar com assincronia, personalizar ações com base em resultados, tratar eventos do usuário e lidar com erros, proporcionando controle sobre o fluxo de execução do código.
*/

const slv = nome => alert("Olá " + nome)

const Entusuario = (callback) => {
    const nome = prompt("Digite seu nome: ")
    callback(nome)
}

Entusuario(slv)
