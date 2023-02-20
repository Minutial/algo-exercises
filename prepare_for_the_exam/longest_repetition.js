https://www.codewars.com/kata/586d6cefbcc21eed7a001155/javascript

function longestRepetition(s) {
  let count = 0;
  let temp = s.charAt(0);
  let arr = [];
  let maxx= [];

  for (let i = 0; i < s.length; i++) {
      if (temp === s.charAt(i)) {
          count++;
          temp = s.charAt(i);
      } else {
          arr.push([temp, count]);
          temp = s.charAt(i);
          count = 1;
      }
      if ( i == s.length - 1) {
          arr.push([temp, count]);
      }
  }
  if ( arr.length > 0) {  
      maxx =arr[0];
      for(let i = 0; i < arr.length; i++) {
          if (maxx[1] < arr[i][1]) {
              maxx=arr[i];
          }
      }
  } else {
      maxx = ['', 0];
  }
  return maxx;
}

console.log(longestRepetition("aaabbbsaaaa"))