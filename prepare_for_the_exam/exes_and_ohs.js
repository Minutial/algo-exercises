function XO(str) {
  let letters = str.toLowerCase().split('')
  let x = 0;
  let o = 0;
  for (let i = 0; i < letters.length; i++){
      if (letters[i] ==="x"){
          x +=1;      }
      if (letters[i] ==="o"){
          o +=1;
      }
  }
    if(x===o) {
        return true;
    } else {
        return false;
    }
}


function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

function XO(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}