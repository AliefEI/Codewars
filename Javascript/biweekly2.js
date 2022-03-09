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

/*
parameter -- s, string
return -- string without numbers
example -- 'frgw4t6' // frgwt
pseudocode --
  - create var replacing all num with empty element 
  - turn element into a string
*/


function stringClean(s){
    // Function will return the cleaned string
    let noNumbers = s.replace(/[0-9]/g, '')
    return String(noNumbers)
  }