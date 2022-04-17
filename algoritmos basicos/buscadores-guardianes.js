/*
Buscadores guardianes
Crea una función que recorra un arreglo arr y devuelva el primer elemento que pase un "detector de verdad". Esto significa que dado un elemento x, el "detector de verdad" es pasado si func(x) es true. Si ningún elemento pasa la prueba. la función debería devolver undefined.

*/

function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num) === true) {
        return num;
      } 
    }
  }
  
  console.log(findElement([1, 3, 3, 9], num => num % 2 === 0));
  