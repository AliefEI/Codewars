//Your function takes two arguments:

//current father's age (years)
//current age of his son (years)
//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

//param= dad's age and son's age
//return #years WHEN dad=2sonAge
//example 42/2-->21

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  let twiceSonAge= sonYearsOld*2
  if (twiceSonAge>=dadYearsOld){
    return twiceSonAge-dadYearsOld
  }else{
    return dadYearsOld-twiceSonAge
  }
}
