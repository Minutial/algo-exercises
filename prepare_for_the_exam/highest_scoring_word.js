// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x){
  const alphabets = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  const splitString = x.split(" ")
  let highestScore = 0;
  let highestNumOfWord = 0;
  
  for (let i = 0; i < splitString.length; i++) {
    let tempScoreHolder = 0;
    
    for (let j = 0; j < splitString[i].length; j++) {
      tempScoreHolder += alphabets.indexOf(splitString[i][j]) + 1;

      if(tempScoreHolder > highestScore) {
        highestScore = tempScoreHolder;
        highestNumOfWord = i;
      }
      
  }
}
return splitString[highestNumOfWord]
}
console.log(high('man i need a taxi up to ubud'));

/* function high(x){
  let alphabets = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  
  let words = x.split(" ");
  let highestScore = 0;
  let highestScoreWord = "";
  
  for (let word of words) {
    let lettersSum = 0;
    
    for (let letter of word) {
      lettersSum += alphabets.indexOf(letter) + 1;
    }
    
    if (lettersSum > highestScore) {
      highestScore = lettersSum;
      highestScoreWord = word;
    }
  }
  
  return highestScoreWord;
} */