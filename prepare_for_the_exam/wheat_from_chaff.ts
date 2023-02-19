function wheatFromChaff(values: number[]) {
  let wheat: number[] = [];
  let chaff: number[] = [];

  for(let i: number = 0; i < values.length; i++) {
    if(values[i] > 0) {
      wheat.push(values[i])
    } else {
      chaff.push(values[i])
    }
  };

  if(wheat.length === 0) {
    return chaff.sort().reverse();
  } else if (chaff.length === 0) {
    return wheat.sort()
  } return chaff.sort().reverse().concat(wheat.sort());
};
