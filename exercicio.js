"use strict";
function calcularArea(base, altura) {
    return base * altura;
}
const calcularArea1 = (base, altura) => base * altura; //mesmo código que o de cima só que mais simples
function somar(...numeros) {
    //numeros.reduce()
    console.log(numeros);
}
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oiii`;
    }
}
