function narcissistic(value: number): boolean {
  
  let converted: string = String(value);
  let stringArray: string[] = Array.from(converted);
  let numsArray: number[] = stringArray.map(element => parseInt(element, 10));

  let sumArray: number[] = []
  
  for(let i: number = 0; i < numsArray.length; i++) {
    sumArray.push((Math.pow(numsArray[i], numsArray.length)))
  };

  let sum: number = sumArray.reduce((prev, next) => prev + next, 0);

  if(sum === value) {
    return true;
  } else return false
};
