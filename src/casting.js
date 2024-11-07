"use strict";
//estou usando o namespace pq a variavel idade ja tem em outra pasta na pasta de tipos, então se n colocarmos ele dá erro
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed(); // aqui estou falando que idade as(é) um numero
    idade.length;
    idade.forEach(x => {
        console.log(x);
    });
    let nome = 35;
    nome;
})(casting || (casting = {}));
