/*
parameter -- word, string 
return -- all the locations of vowel in string 
example -- 'i like You' // [0,3,5,7,8,9]
pseudocode --
  - turn letter all lowercase  (can include in the vowel)
  - turn word in to an array separated by letters
  - create an empty array for result 
  - define what vowels are 
  - iterate through the array 
*/

function vowelIndices(word){
    //your code here
    let result = []
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y']
    let arrayWord = word.toLowerCase().split('')
    //console.log(arrayWord)
    for (var i = 0; i < arrayWord.length; i++) {
      if (vowels.indexOf(arrayWord[i]) != -1) {
        result.push(i + 1)
      }
    }
    return result
  }