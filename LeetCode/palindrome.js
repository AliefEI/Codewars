/**
 * @param {number} x
 * @return {boolean}
    example -- 1221 // true 
    pseudocode --
    - split x but character
    - reverse x 
    - join x
    - compare x to new x
 */

    var isPalindrome = function(x) {
        //console.log(x)
        var newX = x.toString().split('').reverse().join('')
        //console.log(newX)
        return x == newX
    }