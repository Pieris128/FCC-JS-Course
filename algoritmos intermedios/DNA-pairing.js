/**
 * DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


 */

function pairElement(str) {
    let arr = str.split("");
    let result = arr.map ((char) => {
      
      if (char === 'G') {
        return ["G","C"];
      }
        if (char === 'C') {
        return ["C","G"];
      }
        if (char === 'A') {
        return ["A","T"];
      }
        if (char === 'T') {
        return ["T","A"];
      }
      
    })
  return result;
    console.log(result)
  }
  
  pairElement("GCG");