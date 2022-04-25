/**
 * Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


 */

function sumFibs(num) {
    //fibonacci till num
  var fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (var i = 2; i <= num; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  
  //filtrar pares
  let fibOdds = fibonacci.filter( (num) => {
    return num % 2 !== 0;
  } )
  
  //acotar fibOdds hasta num
  let acotado = fibOdds.filter( (item) => item <= num)
  
  //sumar todos los valores})
  
  let sum = acotado.reduce( (acumulador, numero) => {
  return acumulador + numero;
  })
  
  console.log(sum)
  
  return sum;
  
  
  }
  
  sumFibs(4);