/*
parameter -- number (sq)
return -- next perfect number, if perfect num equal -1
example -- 24 // 25 or 36 // -1
pseudocode --
  - if perfect return -1 
  - else 
*/

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let squareRoot = Math.sqrt(sq)
    let isItTorFalse = Number.isInteger(squareRoot)
    //console.log(isItTorFalse)
    if (isItTorFalse === true){
      let wholeNum = Math.floor(squareRoot) + 1
      console.log(wholeNum)
      return wholeNum * wholeNum
    }else{
       return -1
    }
  }