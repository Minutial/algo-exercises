// https://www.codewars.com/kata/5226eb40316b56c8d500030f

function pascalsTriangle(n) {
  let pascal = [];
  for (let i = 0; i < n; i++ ) {
    let pascalNum = pascal.length - i;
    for (let j = 0; j < i + 1; j++ ) {
      if ( j === 0 || j === i ) {
        pascal.push(1);
      } else {
        pascal.push(pascal[pascalNum + j] + pascal[pascalNum + j - 1])
      }
    }
  }
  return pascal;
}


