/*
You will be given a string with sets of characters, (i.e. words), seperated by between one and three spaces (inclusive).

Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").

Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.

"A big brown fox caught a bad rabbit" => True/true
"Xylophones can obtain Xenon." => False/false

parameter -- string 
return -- true/false 
example --
  'bad bunny ate my carrot' // true
  'the zebra hit my nose' // false 
pseudocode 
  - create an empty array to start letter/charater in when seperated
  - turn string into array 
  - compare the index zero to if they are between a-m  // 
  - else // false
*/
function connotation(str) {
  let posNum = 0;
  let negNum = 0;
  const arr = str.toLowerCase().split(' ')
  for(let word of arr){
    if(word[0] == undefined){
      
    } else if(word[0].match(/[a-m]/)){
      posNum++
    } else if(word[0].match(/[n-z]/)){
      negNum++
    } 
  }
  return posNum >= negNum
}