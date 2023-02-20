/* 9. Create a function called divisibleSumPairs that takes an array of integers (array)
and an integer (n) as an input and returns how many [array[i],array[j]] 
pairs exist where i < j (indexes) and n is divisible by array[i] + array[j].
example: [1,2,3,4,5],10 returns 2 because 1+4 and 2+3 both are divisors of 10
*/

function divisibleSumPairs(array, n) {
  let counter = 0;
  if (array.length === 0) {
    return 0;
  }
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (n % (array[i] + array[j]) === 0) {
        counter++;
      }
    }
  }
  return counter;
}

console.log(divisibleSumPairs([2, 3, 4], 10));
