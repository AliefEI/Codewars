/*
prep -- string (name)
return -- string
example --
  name = john // 'hello, john'
  name = johnny // 'hello, my love'
pseudocode --
  create if/else statement 
    if name === johnny // 'Hello, my love!'
    else name !== johnny // 'Hello, ' + name + '!'

*/

function greet(name){
    if(name === "Johnny")
      return "Hello, my love!";
    return "Hello, " + name + "!";
  }