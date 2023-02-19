// https://www.codewars.com/kata/525a566985a9a47bc8000670

function rotate(matrix, direction) {
  if(direction === "clockwise"){
    return rotateArrClockwise(matrix);
  } else {
    return rotateArrCounterClockwise(matrix);
  }
}


function rotateArrClockwise(arr) {
  let _arr = [...arr].reverse();
  let newarr = [];
  
  for (let i = 0; i < arr[0].length; i++) {
    let newRow = [];
    newRow = _arr.map((x) => {
      return x[i];
    });
    newarr.push(newRow);
  }
  return newarr;
}
function rotateArrCounterClockwise(arr) {
  let _arr = [...arr];
  let newarr = [];
  
  for (let i = arr[0].length-1; i >= 0; i--) {
    let newRow = [];
    newRow = _arr.map((x) => {
      return x[i];
    });
    newarr.push(newRow).reverse;
  }
  return newarr;
}

// - - - - - - - - - - -  - - - - - -
/* function rotate(matrix, direction) {
  return direction == 'clockwise' ? 
    matrix[0].map( (_, k) => matrix.map(a => a[k]).reverse() ) : 
    matrix[0].map( (_, k) => matrix.map(a => a[k]) ).reverse()
}
console.log(rotate([
  [ 'M', 'N', 'O', 'P' ],
  [ 'I', 'J', 'K', 'L' ],
  [ 'E', 'F', 'G', 'H' ],
  [ 'A', 'B', 'C', 'D' ]
],"counter-clockwise"))

 */
/* function rotate(matrix, direction) {
  var result = [],
      n = matrix.length,
      m = matrix[0].length,
      i, j, row;
  
  for (i = 0; i < m; ++i) {
    row = [];
    for (j = 0; j < n; ++j) {
      row.push(direction === 'clockwise' ? matrix[n - j - 1][i] : matrix[j][m - i - 1]);
    }
    result.push(row);
  }
  
  return result;
} */