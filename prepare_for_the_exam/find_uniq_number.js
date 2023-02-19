// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  let numberOne = arr[0];
  let numberTwo = 0;
  let countererOne = 0;
  let countererTwo = 0;
      console.log(arr)
  for (let i = 0; i<= arr.length-1; i++ ) {
    console.log(countererOne,countererTwo);
    if(arr[i] === numberOne) {
      countererOne++;
    }
    else {
      numberTwo = arr[i];
      countererTwo++;
    }
  }
  if(countererOne === 1) {
    return numberOne;
  } else {
    return numberTwo;
  }
}
 console.log(findUniq([6,0,0]))