//estou usando o namespace pq a variavel idade ja tem em outra pasta na pasta de tipos, então se n colocarmos ele dá erro
namespace casting {
    let idade: any = 25;
    (idade as number).toFixed(); // aqui estou falando que idade as(é) um numero
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x);
    })

    let nome: string = 35 as unknown as string;
    nome
}