/**************************************************************************************** */
// Find longest word in array //

function longestWord(sentence: string) {
  const filtered: any = sentence.toLowerCase().match(/[a-z0-9]+/g);

  const sorted: string[] = filtered.sort((a: string, b: string) => b.length - a.length);

  const longestWordArr: string[] = sorted.filter((word) => word.length === sorted[0].length);

  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } return longestWordArr;
};

/**************************************************************************************** */
// Flatten array //

function flattenArray(arrays: number[][]): number[] {
  return arrays.reduce((prev, next) => prev.concat(next));

  // -------------------------------------------------------------------------- //
  
  return [].concat.apply([], array);
};

/**************************************************************************************** */
// Check if string is anagram //

function isAnagram(str1: string, str2: string): boolean {
  return formatStr(str1) === formatStr(str2);
};

function formatStr(str: string): string {
  return str.replace(/[^\w]/g, '').toLowerCase().split("").sort().join("")
};

/**************************************************************************************** */
// Add all numbers //

function addAll(nums: number[]) {
  //return nums.reduce((prev, next) => prev + next);

  // -------------------------------------------------------------------------- //
  // this works for non-arrayed numbers

function addAll(...numbers) { ==> the spread operator makes a new array out of the passed arguments
  
};

/**************************************************************************************** */
// Add all prime numbers //

function addPrimes(endNum: number): number {
  let total: number = 0;

  function checkForPrime(i: number): boolean {
    for (let j: number = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      };
    };
    return true; 
  };

  for (let i: number = 2; i <= endNum; i++) {
    if (checkForPrime(i)) {
      total += i
    };
  };

  return total;
};

/**************************************************************************************** */
// Sort by height between trees //

function sortByHeight(arr: number[]): number[] {
  let treePos: number[] = [];
  let peopleHeight: number[] = []

  arr.forEach((value, index) => {
    if (value === -1) {
      treePos.push(index);
    } else {
      peopleHeight.push(value)
    };
  });

  let sortedHeight: number[] = peopleHeight.sort((prev, next) => prev - next);
  treePos.forEach((value, index) => peopleHeight.splice(treePos[index], 0, -1));

  return sortedHeight;
};

/**************************************************************************************** */
// Missing letters //

function missingLetters(str: string): string {
  let compare: number = str.charCodeAt(0);
  let missing: string = "";

  let arrayified: string[] = str.split("");

  arrayified.map((letter, index) => {
    if (str.charCodeAt(index) === compare) {
      ++compare
    } else {
      missing = String.fromCharCode(compare);
    }
  }); 

  return missing;
};

/**************************************************************************************** */
// Even and odd sums //

function evenOddSums(numArr: number[]): number[] {
  let odds: number[] = [];
  let evens: number[] = [];

  for (let i: number = 0; i < numArr.length; i++) {
    numArr[i] % 2 === 0 ? evens.push(numArr[i]) : odds.push(numArr[i])
  };

  let oddSum: number = odds.reduce((prev, next) => prev + next);
  let evenSum: number = evens.reduce((prev, next) => prev + next);

  return Array.from(evenSum, oddSum);
};





