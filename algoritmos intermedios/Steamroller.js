/**
 * Steamroller
Flatten a nested array. You must account for varying levels of nesting.


 */

function steamrollArray(arr) {

    let newArr = [];
    
    function descontracturar (arr) {
    
     for (let n in arr){
      if (arr[n].length === undefined){
        newArr.push(arr[n]);
      }
      if (arr[n].length === 1){
        newArr.push(...arr[n]);
      }
       if (arr[n].length > 1){
        descontracturar(arr[n]);
      }
    }
    }
    
    
     for (let n in arr){
      if (arr[n].length === undefined){
        newArr.push(arr[n]);
      }
      if (arr[n].length === 1){
        newArr.push(...arr[n]);
      }
       if (arr[n].length > 1){
        descontracturar(arr[n]);
      }
    }
    console.log(newArr)
    }
    
    steamrollArray([1, {}, [3, [[4]]]]);

    /**
     * La anterior solucion esta mal, me acerque pero uno de los casos me rechazaba porque la tecnica que use no parecio ser la adecuada, ahora una solucion:
     */

     function steamrollArray(arr) {
        const flattenedArray = [];
        // Loop over array contents
      
        for (let i = 0; i < arr.length; i++) {
          
          if (Array.isArray(arr[i])) {
            // Recursively flatten entries that are arrays
            //  and push into the flattenedArray
            flattenedArray.push(...steamrollArray(arr[i]));
          } else {
            // Copy contents that are not arrays
            flattenedArray.push(arr[i]);
          }
        }
        console.log(flattenedArray)
        return flattenedArray;
      };
      
      steamrollArray([[["a"]], [["b"]]]); 