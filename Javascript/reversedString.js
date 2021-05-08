//Complete the solution so that it reverses the string passed into it.

function solution(str){
  let reversedString= ""
  for(let char of str){
    reversedString=char+reversedString
  }return reversedString
}
