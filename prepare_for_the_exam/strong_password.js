// https://www.hackerrank.com/challenges/strong-password/problem

function minimumNumber(n, password) {
  let min_chars = 0;
  
  if(!/[\d]/.test(password)){
    min_chars++;
  }
  if(!/[a-z]/.test(password)){
    min_chars++;
  }

  if(!/[A-Z]/.test(password)){
    min_chars++;
  }

  if(!(/[!@#$%^&*()--+]/.test(password))){
    min_chars++;
  }
  if(n < 6 && (6- password.length) > min_chars){
    return (6-n);
  }
  return min_chars;
}

console.log(minimumNumber(5,"SQZPA"))

const alphabets = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];