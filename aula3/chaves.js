const cliente = {
    nome: "João",
    idade: 23,
    email: "joao@email.com",
    telefone: ["1285712675672", "9758971857656"],
}

// cliente.enderecos = [
//     {
//         rua: "R. Para",
//         bairro: "Santa Rosa",
//         cep: "45200-690",
//         apartamento: true,
//         complemento: "ap 302",
//     },
// ];

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. voce precisa cadastrar um endereço!"); 
}