/*

You can assume, for the purpose of this kata, that the supplied array will not be empty.

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

/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []

parameter - number 
return -- ascending of num, if nums===null value // empty array
examples 
  [1,6,3,-4,8] // [-4,1,3,6,8]
pseudocode 
  determine if nums === numbers || others --> typeof
  if other return empty array 
  else sort value
*/


function solution(nums){
    if (nums === null ){
      return []
    }else{
      return nums.sort(function(a,b){
        return a-b
      })
    }
  }


/*
Take/review information

  -when using sort consider....
    - the amount values in  the list 
    - notes on sort:
        - arrays containing 10 or fewer elements has TIME complexity of O(n^2) and a SPACE complexity of O(1)
        - arrays containing longer elements has time complecity of O(nlog(n)) on average and a SPACE complexity of O(log(n))
        - how to sort element (NUMBER)
            - ascending: take argument/parameter use (.sort()) where inside sort create a function with param of a and b, then return a-b inside the functional block 
                i.e. nums.sort(function(a,b){return a-b})
            - decending: take argumnent/parameter use (.sort) where inside sort create a fucntion with param sof a and b, return b-a inside the functional block 
                i.e. nums.sort(function(a,b){return b-a})
        - how to sort element-- alphabetically 
            - A --> Z: easier than number, do NOT need comparison function 
                i.e. let animals = ['cat', 'dog', 'tiger', 'elephant']
                         animals.sort()
                        console.log(animals) // ['cat', 'dog', 'elephant', 'tiger']
            - Z --> A: slightly longer process than a-->z. take var/argument use (.sort) where inside sort, create a function similar to number sort.
                i.e. let animals = ['cat', 'dog', 'tiger', 'elephant']
                         animal.sort(function(a,b){
                             if (a>b){
                                 return -1
                                }
                             if (b>a){
                                 return 1
                             }return 0
                         })
                         console.log(animals) //['tiger', 'elephant', 'dog', 'cat']
                
*/