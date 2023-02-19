// https://www.codewars.com/kata/57814d79a56c88e3e0000786

function encrypt(text, n) {
  if (!text || n <= 0) {
    return text;
  } 
   for (let a = n; a > 0; a--){
     let temp = '';
     for (let i = 1; i < text.length; i += 2) {
       temp += text[i];
     }
     for (let i = 0; i < text.length; i += 2) {
       temp += text[i];
     }
     text = temp;
   }
   return text;
 }
 
 function decrypt(encryptedText, n) {
 if (!encryptedText || n <= 0) {
   return encryptedText;
   }
   const temp = new Array(encryptedText.length);
   while (n--) {
     let j = 0;
     for (let i = 1; i < temp.length; i += 2) {
       temp[i] = encryptedText[j++];
     }
     for (let i = 0; i < temp.length; i += 2) {
       temp[i] = encryptedText[j++];
     }
     encryptedText = temp.join('');
   }
   return encryptedText;
 }