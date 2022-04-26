/**
 * Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
 */

function truthCheck(collection, pre) {

    let check = collection.map( (item) => {
      
      if (!!item[pre] === false){
            return false;
          } else {
            return true;
          }
          console.log()
    })
    console.log(check)
    
    if (check.indexOf(false) === -1){
      return true;
    } else {
      return false;
    }
    
    
    }
    
    truthCheck([{name: "Quincy", username: "QuincyLarson"}, {name: "Naomi", username: "nhcarrigan"}, {name: "Camperbot"}], "username")