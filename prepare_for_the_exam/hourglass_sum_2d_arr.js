// https://www.hackerrank.com/challenges/2d-array/problem

function hourglassSum(arr) {
  let max = -63;
  for (let i = 0;i < 4; i++) {
      for(let j = 0;j < 4; j++) {
          let sum =   arr[i][j] +   arr[i][j+1] + arr[i][j+2] +
                                  arr[i+1][j+1] +
                    arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
          if(sum > max ){
              max = sum;
          }
      }
  }
  return max;
}