/**
 * Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */

function spinalCase(str) {
  
  
    const regEx = /\w[a-z]+/g;
    let path = str.match(regEx);
  
    return path
              .join("-")
              .toLowerCase();
  
  }
  spinalCase("AllThe-small Things")