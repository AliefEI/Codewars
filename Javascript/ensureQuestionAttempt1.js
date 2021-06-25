/*Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?" 
"No?" --> "No?"

parameter -- string (s)
return -- string with '?'
example -- 
  string = 'elephant'   // 'elephant?'
           'elephant?'  // 'elephant?'
pseucode -- 
  turn string in to array --> separating each letter
    create a variable with separated character 
  have a for loop iterating each element or target the last character in the list
  make a condition if/else 
    if last order contains '?' print then join
    if else last order doesnt contain '?' add '? ' by using 'push' method then join
*/

function ensureQuestion(s) {
    let array = s.split("");
    if (array[array.length - 1] === '?') {
      return array.join("");
      } else {
        array.push("?")
        return array.join("");
      }
  }