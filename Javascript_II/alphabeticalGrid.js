/*

Task:
You need to write a function grid that returns an alphabetical grid of size NxN, where a = 0, b = 1, c = 2....

Examples:
grid(4)

a b c d
b c d e
c d e f
d e f g
grid(10)

a b c d e f g h i j
b c d e f g h i j k
c d e f g h i j k l
d e f g h i j k l m
e f g h i j k l m n
f g h i j k l m n o
g h i j k l m n o p
h i j k l m n o p q
i j k l m n o p q r
j k l m n o p q r s
Notes:
After "z" comes "a"
If function receive N < 0 should return:
null

*/

/* 
parameter -- number value
return array/grid of alphabet letters
example -- grid(5) 
  a b c d e
  b c d e f
  c d e f g
  d e f g h 
  e f g h i
pseudocode 
  - create empty array for first column 
  - convert number to charcode
   - side note -- a=97
   
  - let charcode go through a for loop 
  - once create a first column, use while loop for nth column
*/


function grid(N) {
    //let convert = N.toString().split('').map(Number).map(n => (n || 10) + 96).map(c => String.fromCharCode(c))
    //   return convert
    if (N < 0){
      return null
    }
    let result = ''
     for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        let letter = 97 + ((j % N) + i) % 26;
        // 97 is added due to the value of lowercase a in the charcode
        result += String.fromCharCode(letter);
  
        result += j % N === N - 1 ? '\n' : ' ';
      }
    }
  
    return result.slice(0, -1);
  }
  