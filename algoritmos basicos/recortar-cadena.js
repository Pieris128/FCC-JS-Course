/*Recorta una cadena
Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). Devuelve la cadena recortada con un ... al final. */

function truncateString(str, num) {
    let string = "";
    let regEx = /\s/g
    let newString = "";
    let arr = [];
    for (let i = 0; i <= num-1; i++) {
      arr.push(str[i]);
    }
    if (str.length > num){
    arr.push("...");
    }
    string = arr.toString();
    newString = string.replace(/,/g, "");
    console.log(newString)
    return newString;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);