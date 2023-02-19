// https://www.codewars.com/kata/56747fd5cb988479af000028/javascript

function getMiddle(s){
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
console.log(getMiddle("abcde"))

function getMiddle(s) {
  let middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}