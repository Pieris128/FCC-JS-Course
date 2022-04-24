/**
 * Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.


 */

function translatePigLatin(str) {
    let consonant = /[^aeiou]/;
    let consonants = /[^aeiou]+/;
    let arr = [];
    let splitted = [];
    let controled = [];
    let ay = [ 'a', 'y'];
    let way = [ 'w', 'a', 'y'];
  
    
  
  if (str[0] === str.match(consonant)[0]){
    arr = str.match(consonants);
    splitted = str.split("");
    controled = splitted.splice(0, arr[0].length);
    splitted.push(...controled);
    splitted.push(...ay);
    return splitted.join("");
    
  } else {
     splitted = str.split("");
    splitted.push(...way);
    return splitted.join("");
  }
  
  }
  
  translatePigLatin("paragraphs");