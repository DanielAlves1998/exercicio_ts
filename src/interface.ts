class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number) { //a função contrutor ela controi um objeto
        this.numeroDaConta = numeroDaConta;
    }
}

class ContaSalario extends Conta { //extends é para a ContaSalario herdar as caracteristicas da Conta
    depositar(valor: number) {
        this.saldo += valor;
    }
}

//agora para podermos fazer transações de saldos etc...
interface ITransacional { //o I em maiusculo é de interface, e em seguida o nome da Interface nesse caso é Transacional
    transferir: (valor: number, destinatario: Conta) => boolean
    taxaTransferencia: number;
}

interface IExemplo2 {
    cnpj: number;
}

interface IExemplo3 extends IExemplo2 {
    telefone: number;
}

class contaCorrente extends Conta implements ITransacional {
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    };
    taxaTransferencia: number = 0;
    
}