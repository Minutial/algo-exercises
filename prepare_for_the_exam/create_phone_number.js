// https://www.codewars.com/kata/525f50e3b73515a6db000b83


function createPhoneNumber(numbers){
  return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}

function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

function createPhoneNumber(numbers){
  const areaCode = numbers.slice(0, 3).join("");
  const firstThree = numbers.slice(3, -4).join("");
  const lastFour = numbers.slice(6).join("");
  return `(${areaCode}) ${firstThree}-${lastFour}`;
}

