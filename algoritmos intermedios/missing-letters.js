/**
 * Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
    let abc = "abcdefghijklmnopqrstuvwxyz";
    let abcArr = abc.split("");
    let strArr = str.split("");
    let regEx = new RegExp(str[0]);
    let index = abc.match(regEx);
    let count = 0;
  
  if (str.length === abc.length) {
    return undefined;
  }
    for (let i = index.index; i < strArr.length+index.index; i++) {
  if (abcArr[i].indexOf(strArr[i-index.index]) === 0) {
    count++;
  } 
  }
  
  let missing = abcArr.slice(count + index.index, count + index.index + 1);
  console.log(missing)
  return missing.toString()
  }
  
  fearNotLetter("abcdefghijklmnopqrstuvwxyz")