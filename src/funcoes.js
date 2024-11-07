"use strict";
function calculaArea(base, altura) {
    return base * altura;
}
const calculaArea2 = (base, altura) => base * altura; //mesmo código que o de cima só que mais simples
function somar(...numeros) {
    //numeros.reduce()
    console.log(numeros);
}
function teste() {
    if (10 > 5) {
        return 'diz maior que 5';
    }
    else {
        return 5;
    }
}
const resultadoTeste = teste();
