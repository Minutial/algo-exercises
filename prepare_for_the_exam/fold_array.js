function foldArray(array, runs){
  if(!runs){
    return array;
  }
  let arr = [];
    for (let j = 0; j < (array.length-1)/2; j++){
      let a = array[j] + array[array.length-1-j];
      arr.push(a)
    }
    if(array.length % 2 != 0 ){
      arr.push(array[(array.length - 1)/2])
    }

  return  foldArray(arr, runs - 1)
}


//console.log(foldArray([ 1, 2, 3, 4, 5],1))
 console.log(foldArray([ -9, 9, -8, 8, 66, 23 ],1))
