// https://www.codewars.com/kata/583710ccaa6717322c000105

function simpleMultiplication(number){
  return number % 2 === 0 ? number * 8 : number * 9;
}

function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}

function simpleMultiplication(value){
    
  if(value%2===0 ){
   return value *8
  }
  else{
  return value* 9;
  }    
}

