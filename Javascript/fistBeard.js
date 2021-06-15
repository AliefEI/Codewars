/* Hidden within the provided sequence of sequences are numbers that represent the
letters of the words for some of Chuck's favourite things!
Your job is to translate them, and return the words so that Chuck can get back to the
business of punching and kicking things. */

function fistBeard(arr) {
    //Try and shave him... I dare you!
     let s = ''
     arr.forEach( nums => {
       nums.forEach ( letter => {
         s = s + String.fromCharCode(letter)
       })
     })
   
     return s
   }