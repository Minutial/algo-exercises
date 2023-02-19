// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name){
  const slpittedName = name.split(" ");
  const initiate = slpittedName[0][0] +"."+ slpittedName[1][0];
  return initiate.toUpperCase();
  }

  console.log(abbrevName("John ceena"))