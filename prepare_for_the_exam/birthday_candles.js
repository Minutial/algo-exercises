// https://www.hackerrank.com/challenges/birthday-cake-candles/problem


function birthdayCakeCandles(candles) {
  let max = 0;
  let num = 0;
  for (let i = 0; i< candles.length; i++){
    if(candles[i]>max){
        max = candles[i];
    }
    if(candles[i] === max){
          num++;
      }    
  }
  return num;
}

