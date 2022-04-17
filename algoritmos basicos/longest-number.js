/*
Devuelve los números mayores en los arreglos
Devuelve un arreglo que consista en el mayor número de cada sub-arreglo proporcionado. Por simplicidad, el arreglo dado contendrá exactamente 4 sub-arreglos.

Recuerda, puedes iterar a través de un arreglo utilizando un simple bucle for, y acceder a cada miembro del arreglo con la sintaxis arr[i]. */

function largestOfFour(arr) {
    let number = []; 
    for ( let i = 0; i < arr.length; i++) {
      let n = (-Number.MAX_VALUE) * 2;
      for (let j = 0; j < arr[i].length; j++){
          console.log(arr[i][j]);
          if(arr[i][j] > n){
            n = arr[i][j];
          }
                 
      }
       number.push(n);
  }
    
    console.log(number);
    return number;
  }
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);