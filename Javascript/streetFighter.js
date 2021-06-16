
/*
Selection Grid Layout in text:
| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
Input
the list of game characters in a 2x6 grid;
the initial position of the selection cursor (top-left is (0,0));
a list of moves of the selection cursor (which are up, down, left, right);
Output
the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, wether successful or not, see tests);
*/
function streetFighterSelection(fighters, position, moves){
    let players = []
    moves.forEach( (direction) => {
        switch(direction){
          case 'up':
          position[0] = 0
          break
  
          case 'down':
          position[0] = 1
          break
  
          case 'left':
          position[1] -= 1
  
          if(position[1] <= -1){position[1] = (fighters[1].length - 1)}
          break
  
          case 'right':
          if(position[1] === (fighters[1].length - 1)){position[1] = -1}
          position[1] += 1
          if(position[1] > fighters[1].length){position[1] = 0}
          break
        }
      players.push(fighters[position[0]][position[1]])
    } )
  
    return players
  }
  