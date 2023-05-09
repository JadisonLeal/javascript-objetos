const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "11281581275",
    email: "andre@dominio.com"
}

// console.log(`O nome é: ${cliente.nome} e a idade: ${cliente.idade}`);

// // acessando os tres primeiro digitos do cpf com o substring
// console.log(`os tres primeiros numeros  do cpf: ${cliente.cpf.substring(0, 3)}`);


console.log(`O seu nome é ${cliente.nome} e vc tem ${cliente.idade} anos.`);
console.log(`Os tres ultimos numeros do seu cpf é: ${cliente.cpf.substring(8, 11)}`);