/*Create a function called unionAll that takes two dimensional array of integers
([array1, array2, ...]) as an input and returns the union of all the arrays
(Those elements that are present in at least one of the arrays).

You cannot use any built-in Union-like functions that would solve this with single command.

Example cases:
unionAll(
[
  [1, 2, 3], 
  [2, 3, 4]
]);
Should return [1, 2, 3, 4]

unionAll(
[
  [1, 2], 
  [7, 15, -145, 9], 
  [18, 15, 99, 9, 20]
]);
Should return [1, 2, 7, 15, -145, 9, 18, 99, 20]

unionAll(
[
  [], 
  []
]);
Should return []*/


function unique (input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
      for(let j = 0; j < input[i].length; j++) {
          if(result.indexOf(input[i][j]) == -1) {
              result.push(input[i][j])
          } else if (!input) {
              result = [];
          }
      }
  }
  return result
}