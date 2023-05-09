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

// function ligarParaCliente(telefoneResidencial, telefoneTrabalho) {
//     console.log("ligando para: "+cliente.telefone[0]);
//     console.log("ligando para: "+cliente.telefone[1]);
// }

ligarParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);