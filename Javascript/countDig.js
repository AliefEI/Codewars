// Count the Digit

function nbDig(n, d) {
let firstArr = []

for(let i =0; i <= n; i++){
  firstArr.push(i*i)
 }
 let newArr = firstArr.filter(element => element.toString().indexOf(d) >= 0)
  return newArr.toString().split("").reduce((accumulator, currentValue) =>
    currentValue ==  d ? accumulator + 1: accumulator, 0)

}