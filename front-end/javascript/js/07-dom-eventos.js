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
