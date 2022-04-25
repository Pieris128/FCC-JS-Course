/**
 * Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 */

function dropElements(arr, func) {
    let newArr = [];
    let index;    
    for (let n in arr){
        if (func(arr[n])===true){
          index = arr.indexOf(arr[n]);
          break;
       }
    }
    if (index !== undefined){
    newArr = arr.slice(index);
    }
    
    return newArr;
    
    }
    
    dropElements([1, 2, 3, 4], function(n) {return n > 5;});