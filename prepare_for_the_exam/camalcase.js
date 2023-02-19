// https://www.hackerrank.com/challenges/camelcase/problem

function camelCase(str) {
  let counter = 1;
  for(let i = 0; i < str.length;i++){
    if(str[i]== str[i].toUpperCase()){
      counter++;
    }
  }
  return counter;
}
console.log(camelCase("saveChangesInTheEditor"));