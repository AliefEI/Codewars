//Write a function that reverses the bits in an integer.

//For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

//You can assume that the number is not negative.

function reverseBits (n) {
  // your code here
  //let stringToBinary= parseInt(turnToString.)
  let turnToBinary=n.toString(2)
  let turnToArrayReverse=turnToBinary.split('').reverse().join('')
  return parseInt(turnToArrayReverse,2)
}
