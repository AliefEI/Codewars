/*
parameter -- list of numbers
return -- lowest number in the list
example -- [2,6,1,9,-5]
pseudocode --
  sort args by creating function with param of a,b
  return a-b --> ascending value 
  outside function retun index 0 of args
*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort(function(a,b){
      return a-b
    })
    return args[0]
  }
}
