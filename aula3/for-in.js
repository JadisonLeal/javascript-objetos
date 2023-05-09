const cliente = {
    nome: "João",
    idade: 23,
    email: "joao@email.com",
    telefone: ["1285712675672", "9758971857656"],
}

cliente.enderecos = [
    {
        rua: "R. Para",
        bairro: "Santa Rosa",
        cep: "45200-690",
        apartamento: true,
        complemento: "ap 302",
    },
];

for(let chave in cliente) {
    let tipo = typeof cliente[chave];
    if(tipo !== "object" && tipo !== "function") {
        console.log(`${chave} ${cliente[chave]}`);
    }   
}