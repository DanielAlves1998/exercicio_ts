function calcularArea(base: number, altura: number): number {
    return base * altura;
}

const calcularArea1 = (base: number, altura: number): number => base * altura //mesmo código que o de cima só que mais simples

function somar(...numeros: number[]): void {
    //numeros.reduce()
    console.log(numeros)
}


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