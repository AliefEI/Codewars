// Invert values

function invert(array) {
    return array.map( x => x == 0 ? -x : -x);
 }
 
 //P a set of numbers
 //R the additive inverse of each
 //E invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
 //P .map