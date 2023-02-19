// https://www.hackerrank.com/challenges/plus-minus/problem


function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0){
          positive += 1;
      } else if (arr[i] === 0){
          zero += 1;
      } else {
          negative += 1;
      }
  }
  let posOcc = (positive/arr.length);
  let negOcc = (negative/arr.length);
  let zerOcc = (zero/arr.length);
  let result = [posOcc.toFixed(6),negOcc.toFixed(6),zerOcc.toFixed(6)]
return result;
}
console.log(plusMinus([-4, 3, -9, 0, 4, 1]))