/**
 * Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

function convertHTML(str) {
    let replacedString = str;
    const ampRegEx = /&/g;
    const ampReplace = "&amp;"
    const ltRegEx = /</g;
    const ltReplace = "&lt;"
    const gtRegEx = />/g;
    const gtReplace = "&gt;"  
    const dqRegEx = /"/g;
    const dqReplace = "&quot;";
    const aposRegEx = /'/g;
    const aposReplace = "&apos;";
    const specialCaseRegEx = /<>/g;
    const specialReplace = "&lt;&gt;"
  
    if (str.match(ampRegEx) !== null) {
      replacedString = str.replace(ampRegEx, ampReplace);
    }
    if (str.match(specialCaseRegEx) !== null) {
      replacedString = str.replace(specialCaseRegEx, specialReplace );
      return replacedString;
    } console.log(replacedString)
     if (str.match(ltRegEx) !== null) {
      replacedString = str.replace(ltRegEx, ltReplace );
    } 
     if (str.match(gtRegEx) !== null) {
      replacedString = str.replace(gtRegEx, gtReplace);
    } 
  
     if (str.match(dqRegEx) !== null) {
      replacedString = str.replace(dqRegEx, dqReplace);
    }
     if (str.match(aposRegEx) !== null) {
      replacedString = str.replace(aposRegEx, aposReplace);
    }
  console.log(replacedString)
    return replacedString;
  }
  
  convertHTML("<>")