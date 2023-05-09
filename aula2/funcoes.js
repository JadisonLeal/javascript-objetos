// const cliente = {
//     nome: "João",
//     idade: 23,
//     email: "joao@email.com",
//     telefone: ["1285712675672", "9758971857656"],
//     saldo: 200,
//     efetuaPagamento: function(valor) {
//         if(valor > this.saldo) {
//             console.log("Pagamento negado, saldo insuficiente!!");
//         } else {
//             this.saldo -= valor;
//             console.log("Pagamento efetuado com sucesso. saldo atual: " + this.saldo + "$");
//         }
//     }
// }

// cliente.efetuaPagamento(20);

const cliente = {
    nome: "Gabriel",
    idade: 13,
    email: "gab@email.com",
    telefone: ["185175185", "28517518165"],
    saldo: 500,
    efetuaPagamento: function(valor) {
        if(valor > this.saldo) {
            console.log(`Pagamento negado.`) 
        } else {
            this.saldo -= valor;
            console.log(`Pagamento efetuado com sucesso, Seu saldo é de: ${this.saldo} reais.`);
        }
    },
    depositar: function(valorDeposito) {
        if(valorDeposito > 0) {
            this.saldo += valorDeposito
            console.log(`Deposito efetuado com sucesso.`);
        } else {
            console.log(`Valor minimo para depoisito é de 1,00`);
        }
    },
    extrato: function(tirarExtrato) {
        console.log(`Seu saldo é de ${this.saldo} reais.`);
    }

}
cliente.extrato();
cliente.depositar(330);
cliente.extrato();