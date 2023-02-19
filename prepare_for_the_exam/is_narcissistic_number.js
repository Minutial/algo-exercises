// https://www.codewars.com/kata/5287e858c6b5a9678200083c/typescript

function narcissistic(value) {
  let arrValues = value.toString().split('')
  let exponent = arrValues.length;
  let poweredValue = 0;
  let sum = 0;
  
  for(let i = 0; i < exponent; i++) {
    poweredValue = Number(arrValues[i])**exponent;
    sum += poweredValue
  }
  if(sum === value){
    return true
  }
  return false
}