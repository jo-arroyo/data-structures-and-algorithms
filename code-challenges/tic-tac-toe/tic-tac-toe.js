'use strict';

const tWinner = (array) => {
  let winner = 'none';
  if (array[0][0] === array[1][1] && array[0][0] === array[2][2]){
    winner = array[1][1];
  } else if (array[2][0] === array[1][1] && array[2][0] === array[0][2]){
    winner = array[1][1];
  } else {
    for(let i = 0; i < array.length; i++){
      if (array[i][0] === array[i][1] && array[i][0] === array[i][2]){
        winner = array[i][0];
      } else if (array[0][i] === array[1][i] && array[0][i] === array[2][i]){
        winner = array[0][i];
      }
    }
  }
  return winner;
};

module.exports = tWinner;