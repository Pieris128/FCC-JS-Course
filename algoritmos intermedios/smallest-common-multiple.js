/**
 * Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
 */

// mi solucion se queda sin buffer usa mucha memoria tal pareciera
function smallestCommons(arr) {
    let greater = 0;
    let smaller = 0;
      if (arr[0] >= arr[1]){
        greater = arr[0];
        smaller = arr[1]; 
      } else {
        greater = arr[1];
        smaller = arr[0];
      }
   
   let getMult = function (num) {
   const arr = [];
   for (let i = smaller; i <= greater; i++) {
   arr.push(i);
     } 
   for (let n in arr){
   if ((num % arr[n] === 0) === false){
     return false
   };
   }
   }
   
   
   var multiplo = greater + 1;
   
   while (getMult(multiplo) === false){
   multiplo++;
   }
   
   
   return multiplo;
   
   }

   
   /**
    * Tome la sig solucion de las hints de FCC
    */

    function smallestCommons(arr) {
      // Setup
      const [min, max] = arr.sort((a, b) => a - b);
      const numberDivisors = max - min + 1;
      // Largest possible value for SCM
      let upperBound = 1;
      for (let i = min; i <= max; i++) {
        upperBound *= i;
      }
      // Test all multiples of 'max'
      for (let multiple = max; multiple <= upperBound; multiple += max) {
        // Check if every value in range divides 'multiple'
        let divisorCount = 0;
        for (let i = min; i <= max; i++) {
          // Count divisors
          if (multiple % i === 0) {
            divisorCount += 1;
          }
        }
        if (divisorCount === numberDivisors) {
          return multiple;
        }
      }
    }
    
    smallestCommons([1, 5]);