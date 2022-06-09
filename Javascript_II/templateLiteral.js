/*
parameter -- 3 different var -- 1 contains array and 2 strings 
return -- statement 'Hello,  name ! Welcome to city, state'
example -- [john, doe], boston, mass
pseudocode 
  - turn array of 1 long string
  - return sentence using template literal 
*/

function sayHello( name, city, state ) {
    //   console.log(name)
    //   console.log(city)
    //   console.log(state)
      let fullName = name.join(' ')
    //   console.log(fullName)
    //   console.log(`Hello ${fullName}! Welcome to ${city}, ${state}!`)
      return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
    }