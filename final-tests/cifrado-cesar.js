/**
 * Cifrado César
Uno de los cifrados más simples y conocidos es el cifrado César, también conocido como cifrado por desplazamiento. En un cifrado por desplazamiento los significados de las letras se desplazan por una cantidad determinada.

Un uso moderno común es el cifrado ROT13, donde los valores de las letras son desplazados por 13 lugares. Así que A ↔ N, B ↔ O y así sucesivamente.

Escribe una función que reciba una cadena codificada en ROT13 como entrada y devuelva una cadena decodificada.

Todas las letras estarán en mayúsculas. No transformes ningún carácter no alfabético (espacios, puntuación, por ejemplo), pero si transmítelos.
 */

function rot13(str) {

    let abcArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let rotArr = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    
    let regEx = /\W/;
    let strArr = str.split("");
    let newArr = [];
    let indexOfROT;
    
    for (let i = 0; i < strArr.length; i++){
    
      if (!!str[i].match(regEx)){
    newArr.push(strArr[i]);
        }  
      if (!!str[i].match(regEx) === false){
        indexOfROT = rotArr.indexOf(strArr[i]);
        newArr.push(abcArr[indexOfROT]);
        
      }
    
    }
    
    return newArr.join("");
    
    
    }
    