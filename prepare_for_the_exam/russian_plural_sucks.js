// https://www.codewars.com/kata/5b1d38f4d74b5b07350000a3

const makePlural = (options, number) => {
  const exeptions = !(number > 10 && number < 15);
  const ending = number % 10;
  const tenth = number % 100;
  console.log(number)
  
  if(ending === 1 && tenth !== 10 && number !== 11){
    return options[0];
  }
  if (ending > 1 && ending < 5 && exeptions) {
    return options[1];
  }
  return options[2]
}