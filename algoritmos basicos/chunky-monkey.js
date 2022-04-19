/*
Monito Trocitos
Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.

*/

function chunkArrayInGroups(arr, size) {
    let sum = [];
    
     while (arr.length > size) {
    let cut;
    cut = arr.splice(0, size);
    sum.push(cut); 
    
     }
     if (arr.length > 0){
       sum.push(arr);
     }
    
    console.log(sum);
    return sum;
    }
    
    chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);