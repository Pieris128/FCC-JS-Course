/**
 * Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
 */

function diffArray(arr1, arr2) {
    let longest = [];
    let smallest = [];
    let diff = [];
    //ordena los arrays segun su cant de elem en longest y smallest, si es = los deja como estan
    arr1.length === arr2.length ?
    (longest = [...arr1], smallest = [...arr2]) :
     arr1.length > arr2.length ? 
     (longest = [...arr1], smallest = [...arr2]) : 
     (longest = [...arr2], smallest = [...arr1]);
    
    longest.map( function(item) {
      if (smallest.indexOf(item) < 0){
        diff.push(item);
      }});
    smallest.map ( function(item) {
      if (longest.indexOf(item) < 0){
        diff.push(item);
      }});
      console.log(diff)
    return diff;
    
    }
    
    diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);


    /**
     * Las soluciones de FCC
     */

    /* Solucion 1: Imperativa */

    function diffArray(arr1, arr2) {
        const newArr = [];
      
        function onlyInFirst(first, second) {
          // Looping through an array to find elements that don't exist in another array
          for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
              // Pushing the elements unique to first to newArr
              newArr.push(first[i]);
            }
          }
        }
      
        onlyInFirst(arr1, arr2);
        onlyInFirst(arr2, arr1);
      
        return newArr;
      }
      
      diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

      /* Solucion 2: Declarativa*/

      function diffArray(arr1, arr2) {
        return arr1
          .concat(arr2)
          .filter(item => !arr1.includes(item) || !arr2.includes(item));
      }
      
      diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

      /* Solucion 3: Declarativa*/

      function diffArray(arr1, arr2) {
        return [...diff(arr1, arr2), ...diff(arr2, arr1)];
      
        function diff(a, b) {
          return a.filter(item => b.indexOf(item) === -1);
        }
      }
      