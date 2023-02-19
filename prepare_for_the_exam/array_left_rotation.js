function rotLeft(a, d) {
  let result = [];
  for (let i = d; i< a.length; i++) {
      result.push(a[i]);
  }
  for (let i = 0; i < d; i++) {
      result.push(a[i]);
  }
  return result;
}
console.log(rotLeft([5,1,3,2],2))