/*
parameter -- x, can be number, boolean, string, anything
return -- turning parameter into string 
example -- dsgerhg vt3 // 'dsgerhg vt3'
pseudocode --
  - target string, number, boolean and array --> make them equal one-another
  - use ptototype to access stored data 
  - use JSON.stringify 
*/

String.prototype.toString = Number.prototype.toString = Boolean.prototype.toString = Array.prototype.toString=function(){
    return JSON.stringify(this)
  }

  
  /*
  lesson 
  - (.prototype) --> allow to easily define methods to all instances of an object. The method is applied to the prototype, so it is only stored in the memory once, but every instance of the object has access to it.
  - JSON --> similar to creating JS objects, helps convert JSON data into JS object 
    - two types: 
        - JSON.parse --> converts JSON strings into JS object 
        - JSON.stringify() --> converts object into JSON string
  */