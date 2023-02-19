// https://www.hackerrank.com/challenges/two-strings/problem


function twoStrings(s1, s2) {
  let lettersMap = {};
    for (const letter of s1) {
      if (!lettersMap[letter]) {
        lettersMap[letter] = 1;
        console.log(lettersMap)
      }
    }
  
    for (const letter of s2) {
      if (lettersMap[letter]) {
        return 'YES';
      }
    }
    return 'NO';
  }

  console.log(twoStrings('hello','world'));