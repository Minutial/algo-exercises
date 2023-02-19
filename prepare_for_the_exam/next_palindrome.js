// https://www.codewars.com/kata/56a6ce697c05fb4667000029

function newtPal(val) {
  for(let i = val + 1;true; i++) {
    if([...String(i)].reverse().join('') === i){
      return i;
    }
  }
}

function newtPalindrome(val) {
  while([...String(++val)].reverse.join('') !== val)
  return val;
}
