"use strict";

/* Array: Vetores e/ou matrizes
Lista/relação de dados indexados,
separados por vírgula. */
let alunos = ["Dio", "Ozzy", "Gillan"];

console.log(
    `O ${alunos[1]} foi o primeiro vocalista do Black Sabbath.`
);

/* Atenção: índice SEMPRE inicia em
zero 0. */


/* Exercícios
1) Crie uma constante com uma lista de linguagens: PHP, JavaScript, SQL, HTML5 e CSS3. */
const linguagens = ["PHP", "JavaScript", "SQL", "HTML5", "CSS3"];

/* 2) Faça uma saída de dados com a seguinte mensagem:

"HTML5 e JavaScript são populares no Front-End, enquanto que PHP é bastante usada no Back-End."   */
console.log(
    `${linguagens[3]} e ${linguagens[1]} são populares no Front-End, enquanto que ${linguagens[0]} é bastante usada no Back-End.`);

console.log(
    linguagens[3] + " e " + linguagens[1] + " são populares no Front-End, enquanto que " + linguagens[0] + " é bastante usada no Back-End.");

console.log("----------");

// Array como matriz
/* let tecnologias = [
    ["HTML5", "CSS3", "JavaScript"],
    ["PHP", "SQL", "Python", "Node.js"],
    ["Figma", "Photoshop"]
];

console.log(tecnologias[1][0]); // PHP
console.log(tecnologias[2][1]); // Photoshop
console.log(tecnologias[0][2]); // JavaScript
 */

let tecnologias = [
    ["HTML5", "CSS3", "JavaScript"],
    [ "PHP", "SQL", "Python", "Node.js"],
    ["Figma", "Photoshop"]

];
console.log(tecnologias[1][0]);//PHP
//Figma
console.log(tecnologias[2][1])//Photoshop
//JavaScript
console.log(tecnologias[0][2])//JavaScript






