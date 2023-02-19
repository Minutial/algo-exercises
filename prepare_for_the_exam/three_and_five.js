// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number){
  let output = 0;
  for(let i = 0; i < number; i++){
    if(i % 3 ===0 || i % 5 === 0){
      output = output +i ;
    }
  }
  return output;
}

console.log(solution(10))