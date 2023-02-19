// https://www.hackerrank.com/challenges/alternating-characters/problem


function alternatingCharacters(s) {
  let counter = 0;
  
  for (let i = 0; i < s.length; i++) {
      if(s[i] === s[i+1]){
          counter += 1;
      }
  }
  return counter;
}

console.log(alternatingCharacters())