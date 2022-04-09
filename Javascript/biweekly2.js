/*
parameter -- word, string
returning -- word parameter capitalized 
example -- object // Object 
pseudocode --
  - take first char 
  - turn toUppercase
  - add word[1] to skip fist letter 
  - turn result into a string
  
*/

function capitalizeWord(word) {
    let result = word.charAt(0).toUpperCase() + word.slice(1)
  //   console.log(result)
    return String(result)
  }

  