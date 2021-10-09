/*
Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

Examples
sumOfABeach("WAtErSlIde")                    ==>  1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
sumOfABeach("cItYTowNcARShoW")               ==>  0

parameter - 'beach' string of words
return - number -- the amount of times the word 'water' 'sand' 'fish' and 'sun' shows up
example - fishorsunderwater' // 3
pseudocode -
    create variable for the words 
    change the beach string into all lowercase
    create a counter set it to zero 
    iterate through the loop using forEach of the words (while--given dont know when it will stop)
    return the counter 
*/


function sumOfABeach(beach) {
    const words = ['water', 'sand', 'fish', 'sun']
    let str = beach.toLowerCase()
    let count = 0;
    words.forEach((word) => {
      while (str.includes(word)) {
         count += 1
         str = str.replace(word, '')
      }
    }) 
    return count;
  }
  
  