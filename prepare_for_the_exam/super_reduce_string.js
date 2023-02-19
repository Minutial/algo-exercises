// https://www.hackerrank.com/challenges/reduced-string/problem

function superReducedString(s) {
  let output = s.split('');
  for(let i = 0; i < output.length; i++){
    if(output[i] === output[i+1]){
      output.splice(i, 2);
      i = -1;
     }
   }
   if (output.length === 0) {
     return 'Empty String';  
   }
  return output.join('');
 }