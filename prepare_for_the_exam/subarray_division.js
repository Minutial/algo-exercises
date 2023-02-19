// https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s, d, m) {
  let ways = 0;
  if(s.length === 1 && s[0] === d){
    return 1;
  }
  console.log("here" , s.length - (m -1))
  for(let i = 0; i < s.length - (m -1); i++){
    let sum = 0;
    let index = i;
    for(let j = 0; j < m; j++){
      sum += s[index++]
    }
    if(sum === d){
      ways++;
    }
  }
  return ways;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2))