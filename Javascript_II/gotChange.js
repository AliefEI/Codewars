/*
parameter -- number, amount in dollar
return -- array of return bills [One, Five, Ten, Twenty, Fifty, Hundred]
example -- 234 // [4-ones, 0-five, 3-ten, 0-twenty, 0-fifty ,2-hundred]
pseudocode 
  - create empty array 
  - state how much each money are 
  - create for loop 
*/

function giveChange(amount) {
    let change = [ 0, 0, 0, 0, 0, 0]
    let remaining = 0
    change [5] = Math.floor(amount / 100 )
    // console.log(change[5]) //3
    remaining = amount - (change[5] * 100)
    // console.log(remaining ) //65
    change[4] = Math.floor(remaining / 50 )
    // console.log(change[4]) // 1
    remaining -= (change[4] * 50 )
    // console.log(remaining) // 15
    change[3] = Math.floor(remaining / 20)
    // console.log(change[3]) //0
    remaining -= (change[3] * 20)
    // console.log(remaining) // 15
    change[2] = Math.floor(remaining / 10)
    // console.log(change[2])
    remaining -= (change[2] * 10)
    // console.log(remaining)
    change[1] = Math.floor(remaining / 5)
    // console.log(change[1])
    remaining -= (change[1] * 5)
    // console.log(remaining)
    change[0] = Math.floor(remaining / 1)
    // console.log(change[0])
    remaining -= (change[0] * 1)
    // console.log(remaining)
    // console.log(change)
    return change
  }