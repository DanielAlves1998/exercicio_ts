type aluno = {
    nome: string;
    cursos?: string[]; //essa interrogação é pq lá em baixo um aluno não tem um curso e para o sistema não ficar pedindo o curso e não da erro tem que colocar essa interrogação
    idade: number
}

const alunos: aluno[] = [ //aqui tem um array de alunos
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
]

alunos.push({ //o push é para adicionar um item
    nome: "Julia",
    cursos: ["Arquitetura", "engenheira"],
    idade: 29
})

const novoAluno: aluno = {
    nome: "lucas",
    idade: 32,
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}