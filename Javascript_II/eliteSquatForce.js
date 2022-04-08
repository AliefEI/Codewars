/*
parameter -- number of street 
return -- number of magazine soldiers has to carry based on number sof weapon 
eaxample -- 
  M16A2, 7 streets // 21 --> needs 1 magazine 
  pt93 8 streets // 24 --> needs 2 magazine 
pseudocode 
  - split info into 2 Distinguishable elements
  - take number of info multiply by 3 
  - divide by number of matched guns --> round the number up 
*/
function magNumber(info){
    //console.log(info)
    [type, street] = info
  //   const type= {
  //   'PT92' : 17,
  //   'M4A1' : 30,
  //   'M16A2' : 30,
  //   'PSG1' : 5,
  //   }
    let bullets = street *3
    //console.log(bullets)
    if (type == 'PT92'){
      return Math.ceil(bullets/17)
    }else if (type == 'M4A1'){
      return Math.ceil(bullets/30)
    }else if (type == 'M16A2'){
      return Math.ceil(bullets/30)
    }else if (type == 'PSG1'){
      return Math.ceil(bullets/5)
    }
}