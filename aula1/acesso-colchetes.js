const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "11281581275",
    email: "andre@dominio.com"
}
// const chaves = ["nome", "idade", "cpf", "email"];

// chaves.forEach((chave) => {
//     console.log(chave, cliente[chave])
// });

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) =>{
    console.log(chave, cliente[chave]);
})