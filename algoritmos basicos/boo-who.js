/*
Boo who (Booleano Quién)
Comprueba si el valor está clasificado como booleano primitivo. Devuelve true o false.

Booleanos primitivos son true y false.

*/

function booWho(bool) {
    if (bool === true || bool === false) {
      return true;
    } else {
      return false;
    }
    
  }
  
  booWho(null);