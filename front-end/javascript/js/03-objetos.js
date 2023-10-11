"use strict";

/* Objeto: estrutura de dados
baseada em pares, constituídos
por chave e valor. Estes pares
são conhecidos como propriedades
ou atributos. Os dados dos objetos
NÃO SÃO INDEXADOS. */

/* let livro = {
    titulo: "Senhor dos Anéis",
    ano: 1954,
    autor: "J.R.R. Tolkien"
};

console.log(livro.titulo);
console.log(livro.ano); */

let livro  = {
    titulo:"Senhor dos Anéis",
    ano:1954,
    autor: "J.R.R Tolkien", 
};

console.log(livro.titulo);
console.log(livro.ano);

// Objeto com array e outro objeto
let cliente = {
    nome: "Fulano de Tal",
    idade: 39,
    telefones: ["11-2222-3333", "11-91234-5678"],
    medidas: {
        peso: 75,
        altura: 1.85
    }
};

console.log(cliente.nome);
console.log(cliente.idade + " anos.");
console.log(cliente.telefones[1]);
console.log(cliente.medidas.altura);


// Array de objetos
let alunos = [
    {
        nome: "Kevin",
        idade: 27
    },
    {
        nome: "Karina",
        idade: 31
    },
    {
        nome: "Diego",
        idade: 38
    }
];
console.log(
`O aluno ${alunos[2].nome} possui ${alunos[2].idade}`);


// Exercícios

/* 1) Crie um objeto chamado "pedido" contendo as seguintes informações:

-Código (combinação de letras e números)
-Lista de 3 produtos (TV, Geladeira, Notebook)
-Data do pedido (10/10/2023)
-Valor do pedido (3500)
-Prazo de entrega em dias (7) */
let pedido = {
    codigo: "123456BR",
    produtos: ["TV", "Geladeira", "Notebook"],
    data: "10/10/2023",
    valor: 3500,
    prazo: 7
};

/* 2) Mostre no console uma frase da seguinte maneira:

"O pedido feito em 10/10/2023 com os produtos: TV, Geladeira e Notebook teve um preço total de: 3500. Prazo de entrega: 7 dias úteis." */
console.log(`O pedido feito em ${pedido.data} com os produtos: ${pedido.produtos[0]}, ${pedido.produtos[1]} e ${pedido.produtos[2]} teve um preço total de: ${pedido.valor}. Prazo de entrega: ${pedido.prazo} dias úteis.`);

console.log("----");

