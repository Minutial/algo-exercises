// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
  numbers = numbers.slice(0);
  const min = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min), 1);
  return numbers;
}

function removeSmallest(numbers) {
  return numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
  }

function removeSmallest(numbers) {
  let copy = [...numbers]
  let smallest = Math.min(...numbers);
  let smallestIdx = numbers.indexOf(smallest)
  copy.splice(smallestIdx, 1)
  return copy
  }