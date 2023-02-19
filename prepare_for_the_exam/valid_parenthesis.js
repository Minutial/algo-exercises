function validParentheses(parens){
  let n = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '('){
      n++;
    }
    if (parens[i] == ')') {
    n--;
    }
    if (n < 0) { 
      return false;
      }
  }
  return true;
}
// false
console.log(validParentheses( "())" ))
// true
console.log(validParentheses( "()" ))