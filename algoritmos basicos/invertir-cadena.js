/* 

Invierte una cadena
Invierte la cadena proporcionada.

Es posible que necesites convertir la cadena en un arreglo antes de poder invertirla.

Tu resultado debe ser una cadena.



*/

function reverseString(str) {
    let reverse = "";
      for (let i = str.length-1; i >= 0; i--) {
        reverse += str[i];
        console.log(reverse);
    
      
      }  
    
    
      
      
      return reverse;
    }
    
    reverseString("hello");