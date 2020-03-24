'use strict';
//inicio del JS
/*Ejercicio
 Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 
Requisitos
titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") should return Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.
*/

//Llamado de botón
document.getElementById('boton').addEventListener('click', mostrarResultado);

//Función que llama a la zona de texto y a muestra el resultado
function mostrarResultado() {
    let t1 = document.getElementById('text').value; //captura de valor del texto
    let tituloCapitalizado = titleCase(t1);
    document.getElementById('resultado').innerHTML = tituloCapitalizado;
}

//Función que transporma la letra

function titleCase(cadena) {
    var convertToArray = cadena.toLowerCase().split(" "); //covierte la cadena de texto en minusculas y a su vez la convierte en matriz con espacio
    var result = convertToArray.map(function(val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
}
titleCase("I'm a little tea pot");