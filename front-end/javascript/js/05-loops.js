"use strict";

/* Estruturas de Repetição
Instruções para realizar tarefas
por uma quantidade específica de vezes.  

Comandos tradicionais:
- while     -> ENQUANTO
- do/while  -> FAÇA/ENQUANTO
- for       -> PARA 

Obs.: normalmente o loop é controlado
atráves de uma variável contadora.
Nomes comuns para esta variável:
i, j, k */

// WHILE
// let i = 1;
// while( i <= 5 ){
//     console.log(`Valor é: ${i}`);
//     i++; // ++ incremento
// }

// DO/WHILE  FAÇA/ENQUANTO
// let i = 1;
// do {
//     console.log(`Valor é: ${i}`);
//     i++;
// } while( i <= 5 )

// FOR
// for( let i = 1; i <= 10; i++ ){
//     console.log(`Valor de i é ${i}`);
// }


// Loop com Array
let alunos = [
    "Ozzy", "Dio", "Gillan", "Martin", "Hughes", "Fagner"
];

// Guardando o tamanho do array na memória (cache)
let quantidade = alunos.length;

for( let i = 0; i < quantidade; i++ ) {
    console.log(`Aluno: ${alunos[i]}`);
} 

/* Exercícios
1) Crie um novo array chamado "clientes" contendo 3 objetos. Cada objeto deverá ter uma propriedade "nome" e uma propriedade "data de nascimento". Invente os nomes e as datas de nascimento. */
let clientes = [
    {
        nome: "David Coverdale",
        data: "20/10/1950"
    },
    {
        nome: "Jon Oliva",
        data: "15/09/1955"
    },
    {
        nome: "Syd Barret",
        data: "01/01/1945"
    }
];


/* 2) Faça um loop (qualquer um dos que vimos) e mostre no console apenas o "nome" de cada cliente. Exemplo de saída:
- Cliente: David Coverdale
- Cliente: Jon Oliva
- Cliente: Syd Barret */
let qtdClientes = clientes.length;
for( let i = 0; i < qtdClientes; i++ ){
    console.log(`- Cliente: ${clientes[i].nome}`);
}

/* Loops exclusivo do JS */

// for/of para arrays
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

/* Para "mes" de "meses" */
for( let mes of meses ){
    console.log(mes);
}

// for/in para objetos
let pessoa = {
    nome: "Fulano",
    sobrenome: "da Silva",
    nascimento: "20/10/2000",
    cidade: "São Paulo",
    telefones: ["11-222-333", "11-966-555"]
};

for(let dados in pessoa){
    if(dados === "telefones"){
        for(let telefone of pessoa[dados]){
            console.log(telefone);
        }
    } else {
        console.log(pessoa[dados]);
    }
}


/* Para "dados" dentro de "pessoa" */
// for(let dados in pessoa){
//     // Exibir SOMENTE a referência da propriedade
//     //console.log(dados);

//     // Exibir os VALORES de cada propriedade
//     console.log(pessoa[dados]);
// }



