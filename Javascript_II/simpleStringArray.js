/*
parameter - s --> string
return -- array of 4 value 
    first digit -- uppercase
    second      -- lowercase
    third       -- number
    fourth      -- special character
example -- 
  - create an empty array 
  - create a for loop traversing through the string
  - create if statement for charCodeAt 
      - between 65 - 90 for uppercase       - first digit   
      - between 97 - 122 for lowercase      - second digit 
      - between 48 - 57 for numbers         - third digit 
      - between 58 - 64 for special charac  - fourth digit 
                                        
*/

function solve(s){
    //   console.log(s)
    //   console.log (typeof(s))
      let array = [0, 0, 0, 0];
      
      for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90){
          array[0] ++
        }if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122){
          array[1] ++
        }if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57){
          array [2] ++
        }if (s.charCodeAt(i) >= 33 && s.charCodeAt(i) <= 47){
          array [3] ++
        }if (s.charCodeAt(i) >= 58 && s.charCodeAt(i) <= 64){
          array [3] ++
        }
      }
      //console.log(array)
      return array;
    }