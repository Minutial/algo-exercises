// https://www.codewars.com/kata/5556282156230d0e5e000089

function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}

function DNAtoRNA(dna) {
  let splitStr = dna.split('');
 let result = []
   for (let i = 0 ; i < splitStr.length;i++){
     if(splitStr[i] ==='T'){
       result.push('U')
     } else {
       result.push(splitStr[i])
     } 
   }
   return result.join('')
 }