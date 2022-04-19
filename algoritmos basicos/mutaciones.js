/*
Mutaciones
Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.

Por ejemplo, ["hello", "Hello"], debe devolver true porque todas las letras de la segunda cadena están presentes en la primera, ignorando mayúsculas o minúsculas.

Los argumentos ["hello", "hey"] deben devolver false porque la cadena hello no contiene y.

Finalmente, ["Alien", "line"], debe devolver true porque todas las letras de line están presentes en Alien.



*/
function mutation(arr) {
  let check = true;
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();
  
  //uso el metodo indexOf para ver si cada letra del segundo arreglo esta en el primero
  
  for (let i = 0; i < secondWord.length; i++){
  
    if (firstWord.indexOf(secondWord[i]) < 0) {
      check = false;
    }
    
  }
  console.log(check);
  return check;
  
  }
  
  mutation(["ate", "date"]);