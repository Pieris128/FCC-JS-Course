/**
 * Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
 */

function myReplace(str, before, after) {
    let regEx = new RegExp(before, 'i');
    let capitalRegEx = /[A-Z]/;
    let index = str.match(regEx);
    let splitted = str.split("");
    let afterSplitted = after.split("");
    let result;
    
        let spliced = splitted.splice(index.index, index[0].length, ...afterSplitted);
  
    
  
    if (before[0].match(capitalRegEx) === null){
      
     result = splitted[index.index].toLowerCase();
     splitted.splice(index.index, 1, result);
        return splitted.join("");
  
    } else if (before[0].match(capitalRegEx)){
      
      result = splitted[index.index].toUpperCase();
     splitted.splice(index.index, 1, result);
        return splitted.join("");
  
    } 
  
  
  
  
  }
  
  myReplace("I think we should look up there", "up", "Down");