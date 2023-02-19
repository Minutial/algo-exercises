// https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words){
  if (!words) {
    return "";
  }
  let sortedArray = [];
  let splitStr = words.split(" ");

  for (let i = 0; i <= splitStr.length; i++){
      for (let j = 0; j < splitStr.length; j++) {
        if(splitStr[j].indexOf(i) >= 0) {
        sortedArray.push(splitStr[j]);
      }
    }
  } 
}

console.log(order("is2 Thi1s T4est 3a"))

function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}  