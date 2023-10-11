/* Comandos Condicionais
Permitem a análise de uma ou mais 
condições. Dependendo do resultado (verdadeiro ou falso) da
análise, o programa/script irá fazer
operações diferentes. 

Comandos mais comuns:
if (se), else (senão), else if (senão se) */


// Verificação de idade (maior ou menor)
// let usuario = prompt("Qual seu nome?");
let usuario = "Fulano";
let idade = 9;

// if( idade >= 18 ){
//     console.log(`Bem-vindo ${usuario}! `);
// } else {
//     console.log(`Poxa ${usuario}, você não pode entrar`);
// }

// Idoso, adulto ou menor de idade
let resultado; // undefined/indefinida

if( idade >= 60 ){
    resultado = "idoso(a)";
} else if( idade >= 18 ){
    resultado = "adulto(a)";
} else {
    resultado = "menor";
}

console.log(resultado);


let numero = 10;
let resultado2;
// if(numero >= 0){
//     resultado2 = "Positivo";
// } else {
//     resultado2 = "Negativo";
// }

// Operador ternário ?:
resultado2 = numero >= 0 ? "Positivo" : "Negativo";
console.log(numero, resultado2);











