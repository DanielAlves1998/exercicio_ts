//o oo significa orientação à objeto

class Pessoa {
    nome: string;
    renda?: number; //a ? quer dizer que a renda é opcional, ela n precisa ser usada em outra pessoa no caso

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} disse oiii`;
    }
}

class contaBancaria {
    protected saldo: number = 0; // o protected é para proteger, qunado a prpriedade é protegida ela é valida apenas dentro da própria classe e dentro das classes filhas
    public numeroConta: number; // o public é aberto, no caso o numeroConta está com o código aberto

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }

    static retornaNumerodoBanco() { // esse método static vai retorna o número do banco no casso é o 243, ela pertence a classe
        return 243;
    }

    //aqu pego o saldo, ou extrato
    private getSaldo() {
        return this.saldo;
    }

    //e aqui é para depositar um valor
    depositar(valor: number) {
        this.saldo += valor;
    }
}

class contaBancariaPessoaFisica extends contaBancaria { //o extends é porquê está tendp uma herança
    depositar(valor: number): void { // void significa vasio
        this.saldo = valor * 2;
    }
}

const contaDoPedro = new contaBancariaPessoaFisica(123456) //estou adicionando uma nova conta bancaria e os números de 1 a 6 seria a senha do cliente
//contaDoPedro.
contaBancaria.retornaNumerodoBanco()