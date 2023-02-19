function findOdd(numArray: number[]): number {
  let result: number = 0;
  let count: number = 0;
  let sorted: number[] = numArray.sort();

  for(let i: number = 0; i < sorted.length; i++) {
    if(numArray[i] === numArray[i + 1]) {
      count += 1;
    } else {
      count += 1;
      if (count % 2 != 0) {
        result = numArray[i];
        break;
      }
    };
  };

  return result;
};
