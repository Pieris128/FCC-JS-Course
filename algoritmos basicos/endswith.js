/*Confirma el final
Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).

Este desafío puede resolverse con el método .endsWith(), que fue introducido en ES2015. Pero para el propósito de este desafío, nos gustaría que usaras uno de los métodos de subcadena de JavaScript en su lugar.

*/

function confirmEnding(str, target) {
    var reg_ex = new RegExp(target + "$");
   let check = str.match(reg_ex);
   console.log(check);
   if (check != null) {
     return true;
   } else {
     return false;
   }
   
   
   
   }
   
   confirmEnding("Bastian", "n");