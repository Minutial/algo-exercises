function findOdd(A) {
  let result = 0;
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < i ; j++){
      if (A[j] > A[i]){
        let temp = A[i];
        A[i] = A[j];
        A[j] = temp;
      }
    }
  }
  for (let i = 0; i < A.length; i++){
    if( A[i] === A[i+1]){
      count+=1;
    } else {
      count+=1;
      if (count % 2 != 0) {
        result = A[i];
        break;
      }
    }
  }
return result
}