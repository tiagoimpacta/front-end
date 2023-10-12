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

// Operador ternário ?: (shorthand if/else)
resultado2 = numero >= 0 ? "Positivo" : "Negativo";
console.log(numero, resultado2);

/* Operadores Lógicos
&&  ->  E (AND)
||  ->  OU (OR)
!   ->  NÃO/NEGAÇÃO (NOT) */

// Banco de Dados fictício
const loginCadastrado = "tiago.bsantos";
const senhaCadastrada = "impacta123";

// Dados de entrada
let login = "tiago.bsantos";
let senha = "impacta123";


// OPERADOR &&
if(login === loginCadastrado && senha === senhaCadastrada){
    console.log("Ok! Entrada permitida...");
} else {
    console.log("Ops! Dados incorretos, verifique...");
}

/* Sobre duplo e triplo = */
let a = "10"; // string
let b = 10; // number

// ==  considera SOMENTE valor
console.log( a == b );  // true

// === considera valor E tipo de dados
console.log( a === b ); // false

// OPERADOR ||
let preco = 1000;
let desconto = 200;
let qtdEmEstoque = 50;

/* Dar desconto no preço se quantidade em
estoque for maior ou igual a 100 OU
se o preço for maior que 3000 */
if(qtdEmEstoque >= 100 || preco > 3000){
    // preco = preco - desconto;
    preco -= desconto;    
    /* -=   operador subtrai e atribui */
} 
console.log(`Preço: ${preco}`);

// Operador ! (NEGAÇÃO/NÃO)
let blackFriday = false; // flag

/* LÓGICA INVERSA/CONTRÁRIA
Se NÃO estivermos no período de Black Friday,
preços ficam normal. Caso contrário, preços com
descontos. */
if( !blackFriday ){
    console.log("Fora da Black Friday, preços normais");
} else {
    console.log("Estamos na Black Friday, descontos!");
}





/* LÓGICA COMUM/HABITUAL
Se estivermos no período de Black Friday,
preços com descontos. Caso contrário, preços 
ficam normal */













