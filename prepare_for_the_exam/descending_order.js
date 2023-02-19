// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n){
  let splitN = n.toString().split("");
  splitN.sort();
  let result = [];
    for (let i =splitN.length; i >= 0; i--){
        result.push(splitN[i])
    }
  return parseInt(result.join(''))
}
console.log(descendingOrder(12316))

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}