/*
Rebote falsy
Quita todos los valores falsos de un arreglo.

Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.

Sugerencia: Intenta convertir cada valor a booleano.
*/

function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
  }
  
  bouncer([false, null, 0, NaN, undefined, ""]);