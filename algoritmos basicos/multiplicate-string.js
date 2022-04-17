/*Repite una cadena repite una cadena
Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). Devuelve una cadena vacía si num no es un número positivo. Para este desafío, no utilices el método incorporado .repeat().

*/

function repeatStringNumTimes(str, num) {
    let string = ""; 
    
    if (num >= 0){
   
    for (let i = 0; i <= num - 1; i++) {
      string += str;
   } console.log(string)
   return string; 
   } else 
   {return ""}
 
 }
 
 repeatStringNumTimes("abc", 3);