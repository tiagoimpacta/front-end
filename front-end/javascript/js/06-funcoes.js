"use strict";

/* Conceitos sobre funções 
Blocos de código com os seguintes objetivos:

- Organização de lógica, com separação de responsabilidades num programa

- Reaproveitamento de código 

- Executar ações a partir de eventos/acontecimentos */

// Sintaxe 1: função anônima/literal
const exemplo1 = function(){
    console.log("Função anônima/literal");
};

// Sintaxe 2: função nomeada/declarada
function exemplo2(){
    console.log("Função nomeada");
}

// Sintaxe 3: arrow function 
const exemplo3 = () => {
    console.log("Arrow Function");
};

// Chamada de função para execução
exemplo1();
exemplo2();
exemplo3();

console.log("---------------");

let preco = 1000;
let desconto = preco * 0.10; // 10% desconto
let valorFinal = preco - desconto;

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });
}

console.log(
`Preço original: ${formatarMoeda(preco)}`);
console.log(
`Desconto de: ${formatarMoeda(desconto)}`);
console.log(
`Preço com desconto: ${formatarMoeda(valorFinal)}`);

console.log("-----------");

// Versão 1: sintaxe tradicional, nomeada
// function dobra(numero){
//     return numero * 2;
// }

// Versão 2: sintaxe arrow function
// const dobra = (numero) => {
//     return numero * 2;
// };

// Versão 3: sintaxe arrow function com retorno implícito
const dobra = numero => numero * 2; 

// Chamadas
console.log( dobra(10) );
console.log( dobra(50) );
console.log( dobra(123.44) );
