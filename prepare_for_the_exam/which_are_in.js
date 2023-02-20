// https://www.codewars.com/kata/550554fd08b86f84fe000a58/javascript

function inArray(array1,array2){
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    for(let j = 0;j < array2.length; j++){
        if(array2[j].includes(array1[i])) {
            result.push(array1[i])
            break;
        }
    }
  }
    return result.sort();
}
console.log("Should return:[arp, live, strong]")
console.log(inArray(["arp", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]))


function inArray(a1, a2) {
  var str = a2.join(' ');
  return a1.filter(s => str.indexOf(s) !== -1).sort();
}


function inArray(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}