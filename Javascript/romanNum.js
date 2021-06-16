// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

function solution(roman){
    // complete the solution by transforming the
    // string roman numeral into an integer
    let values = { I:1, V:5, X:10, L:50,C:100,D:500,M:1000} //object containing roman numeral values
    let result = 0
    let preVal = 0
    let romanArr = roman.split("")
    romanArr.forEach( letter => {
      if (values[letter] > preVal){ //checks if the value being added includes subtraction
        result -= preVal
        result += (values[letter] - preVal)
      }
      else{
        result += values[letter]
      }
      preVal = values[letter] //stores current value for next time in order to check for subtraction
    })
    return result
  