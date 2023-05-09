const cliente = {
    nome: "João",
    idade: 23,
    email: "joao@email.com",
    telefone: ["1285712675672", "9758971857656"],
    enderecos: [{
        rua: "R. Para",
        bairro: "Santa Rosa",
        cep: "45200-690",
        apartamento: true,
        complemento: "ap 302",
    }, {
        rua: "Maceió",
        bairro: "Trobogi",
        cep: "62300-230",
        apartamento: true,
        complemento: "ap 101", 
    }],
}

//  Adicionando elementos
cliente.enderecos.push({
    rua: "Oruja",
    bairro: "Perola",
    cep: "64210-230",
    apartamento: false,
    casa: "702"
});

console.log(cliente);


//   Filtrando endrecos
const enderecosApartamento = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(enderecosApartamento);

