"use strict";
//o oo significa orientação à objeto
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oiii`;
    }
}
class contaBancaria {
    constructor(numeroConta) {
        this.saldo = 0; // o protected é para proteger, qunado a prpriedade é protegida ela é valida apenas dentro da própria classe e dentro das classes filhas
        this.numeroConta = numeroConta;
    }
    static retornaNumerodoBanco() {
        return 243;
    }
    //aqu pego o saldo, ou extrato
    getSaldo() {
        return this.saldo;
    }
    //e aqui é para depositar um valor
    depositar(valor) {
        this.saldo += valor;
    }
}
class contaBancariaPessoaFisica extends contaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new contaBancariaPessoaFisica(123456); //estou adicionando uma nova conta bancaria e os números de 1 a 6 seria a senha do cliente
//contaDoPedro.
contaBancaria.retornaNumerodoBanco();
