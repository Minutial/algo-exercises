// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  let result = [0,0];
  for (let i = 0; i < a.length; i++) {
          if (a[i] > b[i]){
              result[0] += 1;
          }
          if (a[i] < b[i]){
              result[1] += 1;
          }
  }
  return result; 
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]))