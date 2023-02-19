// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function findAverage(array) {
  if(!array.length) {
   return 0; 
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

function find_average(array) {
  return array.length ? array.reduce((a,c )=> a + c,0) / array.length : 0
}