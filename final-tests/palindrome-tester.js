/**
 * Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
 */

function palindrome(str) {
    //limpio y reagrupo el str, compruebo la cantidad de caracteres y el indice del caracter central.
    let lowered = str.toLowerCase();
    let regEx = /[^-_:." "/)(.\|,)]/gi;
    let cleaner = lowered.match(regEx);
    let joined = cleaner.join("");
  
  // divido str a la mitad para evenso
    if (joined.length % 2 === 0){
      let firstHalf = cleaner.slice(0, (cleaner.length/2));
      let secondHalf = cleaner.slice(cleaner.length/2);
      let firstHalfJoined = firstHalf.join("");
  // doy vuelta la segunda mitad para comparar si es === a la primera
      
      let turn= (arr) => {
        let turned = [];
        let length = arr.length;
  
     for (let i = 0; i < length; i++){
    turned.push(arr.pop());
     }
        let joined = turned.join("");
        return joined;
      }
      let secondHalfTurned = turn(secondHalf);
  
  // Comparo y devuelvo
      if (firstHalfJoined === secondHalfTurned){
        return true;
      } else { 
        return false;
      }
    }
  
  //divido str a la mitad para odds
  
    let index = Math.floor(joined.length / 2);
    let firstHalf = cleaner.slice(0, index);
    let secondHalf = cleaner.slice(index+1);
    let firstHalfJoined = firstHalf.join("");
  
  // doy vuelta la segunda mitad
  let turn= (arr) => {
        let turned = [];
        let length = arr.length;
  
     for (let i = 0; i < length; i++){
    turned.push(arr.pop());
     }
        let joined = turned.join("");
        return joined;
      }
      let secondHalfTurned = turn(secondHalf);
  
  //COMPARO
  
   if (firstHalfJoined === secondHalfTurned){
        return true;
      } else { 
        return false;
      }
    
  
  
  
  
  }
  palindrome("A man, a plan, a canal. Panama")