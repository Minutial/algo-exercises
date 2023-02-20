// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }
  
  let arr1 = [...array1];
  let arr2 = [...array2];
  
  for (let i = 0; i < arr1.length; i++) {
    let squared = arr1[i] * arr1[i];
    let index = arr2.indexOf(squared);
    
    if (index === -1) {
      return false;
    }
    
    arr2[index] = null;
  }
  
  return true;
}