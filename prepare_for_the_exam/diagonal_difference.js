// https://www.hackerrank.com/challenges/diagonal-difference/problem


function diagonalDifference(arr) {
  let sumOne = 0;
  for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < arr[i].length; j++) {
          if (i === j){
              sumOne += arr[i][j];
          }
      }
  }
  let sumTwo = 0;
  for (let i = 0; i < arr.length; i++){
      for (let j = arr.length-1; j >= 0; j--) {
          if ((i + j) === arr.length-1){
              sumTwo += arr[i][j];
          }
      }
  }
  if (sumOne > sumTwo) {
      return sumOne - sumTwo;
  }
  return sumTwo - sumOne;

}

console.log(diagonalDifference([
  [1, 7, 7],
  [6, 5, 7],
  [5, 2, 1]
]))