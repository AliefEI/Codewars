/*
parameter -- array of number 
return -- total wait time 
example -- 
    coffees  [2, 10,  5,  3,  9]
             [2,  3,  5,  9,  10]
 wait time    2   7   14  25  37     --> total is 85
 pseudocode --
  - if no customer come in --> 0
  - sort wait time from least to greatest 
  - create empty array for each coffee wait 
  - create for loop, where iterate through the array 
    condition -- it through the indexes multiply by 2 
              -- add value in element of the array 
  - create sum of the coffee wait time 

*/

function barista(coffees){
    if(coffees.length === 0) {
      return 0
    }
    let sortCoffee = coffees.sort((a,b)=>a-b)
    //console.log(sortCoffee)
    
    let time = sortCoffee[0]
    const result = [time]
    
    for (let i = 1; i < sortCoffee.length; i++){    
      time += 2 + sortCoffee[i];
      result.push(time);
    }
    //console.log(result)
    return result.reduce((a, b) => a + b, 0);
  }