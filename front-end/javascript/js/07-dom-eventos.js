"use strict";

/* Métodos/funções de seleção no DOM 

-getElementById() 
Seleção de UM elemento através do ID

-querySelector()
Seleção de UM elemento atráves de um seletor.

-querySelectorAll()
Seleção de VÁRIOS elementos através de seletores.
*/

/* Exemplos de acesso ao DOM */

// Seleção via id
const exemploSubtitulo = document.getElementById("subtitulo");
console.log(exemploSubtitulo);

// Seleção usando querySelector
const descricaoDom = document.querySelector("#descricao-dom");
console.log(descricaoDom);

// Seleção usando querySelectorAll
const exemplos = document.querySelectorAll(".exemplo");
console.log(exemplos);


/* Modificando elementos no DOM */
exemploSubtitulo.innerHTML = "Brincando com JS!";
exemploSubtitulo.style.background = "salmon";

/* Trabalhando com eventos */
const exemplo01 = document.querySelector("#exemplo01");
const pagina = document.querySelector("body");
const mensagem = document.querySelector("#mensagem");

// Ouvinte de Evento
exemplo01.addEventListener("click", function(){
    pagina.style.fontFamily = "Verdana";
    mensagem.innerHTML = "Clicou! :)";
});

// Modo Noturno
// const botaoNoturno = document.querySelector("#noturno");
// botaoNoturno.addEventListener("click", function(){
//     pagina.classList.toggle("noturno");
// });

//Modo Noturno
const botaoNoturno = document.querySelector("#noturno");

botaoNoturno.addEventListener("click", function (){
    pagina.classList.toggle("noturno");

    /* Se a página está com a classe noturno */
    if(pagina.className == "noturno"){
        // Mudamos o texto do botão pra Desativar
        botaoNoturno.textContent = "Desativar";
    } else {
        // Mudamos o texto do botão pra Ativar
        botaoNoturno.textContent = "Ativar";
    }
});