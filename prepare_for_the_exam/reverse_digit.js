// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}
console.log(digitize(3501))
;