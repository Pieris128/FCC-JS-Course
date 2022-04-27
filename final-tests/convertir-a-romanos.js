/**
 * Conversor de números romanos
Convierte el número proporcionado en un número romano.

Todos los números romanos deben proporcionarse en mayusculas.
 */

/**
 * CONVIERTE HASTA 3999
 */

function convertToRoman(num) {
    //tabla de numeros romanos
    let unidad = 'I';
    let cinco = 'V';
    let decena = 'X';
    let cincuenta = 'L';
    let centena = 'C';
    let quinientos = 'D'
    let millar = 'M';
  
    //descomponer numero
    let string = num.toString();
    let arr = string.split("");
    let length = arr.length;
    
  
    //Asigno el numero descompuesto en M, C, D y U a respectivas variables
  let unidades;
  let decenas; 
  let centenas;
  let millares;
  
    if (length >= 1){unidades = arr.pop();
  unidades = parseInt(unidades);  
    } 
    if (length >= 2){decenas = arr.pop();
    decenas = parseInt(decenas);
    }
    if (length >= 3){centenas = arr.pop();
    centenas = parseInt(centenas);
    }
    if (length >= 4){millares = arr.pop();
    millares = parseInt(millares);
    }
  
  //creo cuatro funciones que conviertan cada variable a numeros romanos
  function convertU (unidades) {
  if (unidades === 0){return ''}  
  if (unidades === 1){return 'I'}
  if (unidades === 2){return 'II'}
  if (unidades === 3){return 'III'}
  if (unidades === 4){return 'IV'}
  if (unidades === 5){return 'V'}
  if (unidades === 6){return 'VI'}
  if (unidades === 7){return 'VII'}
  if (unidades === 8){return 'VIII'}
  if (unidades === 9){return 'IX'}
  }
  
  function convertD (decenas) {
  if (decenas === 0){return ''}  
  if (decenas === 1){return 'X'}
  if (decenas === 2){return 'XX'}
  if (decenas === 3){return 'XXX'}
  if (decenas === 4){return 'XL'}
  if (decenas === 5){return 'L'}
  if (decenas === 6){return 'LX'}
  if (decenas === 7){return 'LXX'}
  if (decenas === 8){return 'LXXX'}
  if (decenas === 9){return 'XC'}
  }
  
  function convertC (centenas) {
  if (centenas === 0){return ''}  
  if (centenas === 1){return 'C'}
  if (centenas === 2){return 'CC'}
  if (centenas === 3){return 'CCC'}
  if (centenas === 4){return 'CD'}
  if (centenas === 5){return 'D'}
  if (centenas === 6){return 'DC'}
  if (centenas === 7){return 'DCC'}
  if (centenas === 8){return 'DCCC'}
  if (centenas === 9){return 'CM'}
  }
  
  function convertM (millares) {
  if (millares === 1){return 'M'}
  if (millares === 2){return 'MM'}
  if (millares === 3){return 'MMM'}
  
  }
  
  //Uso las funciones para convertir el contenido de cada variable
  
  unidades = convertU(unidades);
  decenas = convertD(decenas);
  centenas = convertC(centenas);
  millares = convertM(millares);
  
  //hago un sistema de retorno segun los casos
  
   if (length === 1){
     return unidades; 
    } 
    if (length === 2){
      return decenas.concat(unidades);
    }
    if (length === 3){
      return centenas.concat(decenas).concat(unidades);
    }
    if (length >= 4){
      return millares.concat(centenas).concat(decenas).concat(unidades);
    }
  
  }
  
  console.log(convertToRoman(400))