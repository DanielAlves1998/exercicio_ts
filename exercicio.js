"use strict";
class Valor {
    constructor() {
        this.valor = 4;
    }
}
class Valor1 extends Valor {
    depositar(valor) {
        this.valor = valor * 2;
    }
}
