/*
Encuentra la palabra más larga en una cadena
Devuelve la longitud de la palabra más larga en la oración proporcionada.

Tu respuesta debe ser un número.


*/

function findLongestWordLength(str) {
    let regEx;
    let code = [];
    let count = 0;
    regEx = /(\w+)/gi;
  code = str.match(regEx);
  for (let i = 0; i < code.length; i++) {
    
    console.log(code[i].length);
  
    if (code[i].length > count) {
      count = code[i].length;
  
    }
  }
    console.log(count);
    return count;
      }
    
   
  
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");