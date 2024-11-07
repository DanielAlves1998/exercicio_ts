"use strict";
const alunos = [
    {
        nome: "carlos",
        cursos: ["front-end", "UX/UI"],
        idade: 27,
    },
    {
        nome: "Ana",
        cursos: ["front-end", "python"],
        idade: 21,
    },
];
alunos.push({
    nome: "Julia",
    cursos: ["Arquitetura", "engenheira"],
    idade: 29
});
const novoAluno = {
    nome: "lucas",
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
