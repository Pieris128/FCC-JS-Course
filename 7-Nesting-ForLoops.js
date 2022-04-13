// Nesting For Loops
 /*
 If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.
*/

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  for (let i = 0; i < arr.lenght; i++) { // [i] accede al arreglo y selecciona uno de los arreglos internos, nested arrays
    for (let j = 0; j < arr[i].length; j++) { // [j] itera dentro de los arreglos seleccionados x [i].
      product *= arr[i][j]; // tomamos los valores uno a la vez tal que arr[0][0] = 1; arr[0][1] = 2; then arr[1][0]=3; arr[1][1]=4; and so it goes on and ond and on till i = arr.lenght    }
  }
    // Only change code above this line
    return product;
  }
}
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);