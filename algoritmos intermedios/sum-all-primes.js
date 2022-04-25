/**
 * Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
 */

function sumPrimes(num) {
    let primes = [];
  
    const isPrime = numero => {
      for(let i = 2, s = Math.sqrt(numero); i <= s; i++)
          if(numero % i === 0) return false; 
      return numero >= 2;
  }
  
    for (let i = 1; i <= num; i++){
      if (isPrime(i) === true){
        primes.push(i);
      }
    }
  
    let sum = primes.reduce ( (acumulador, item) => acumulador + item);
  return sum;
  console.log(sum)
  }
  
  sumPrimes(10);