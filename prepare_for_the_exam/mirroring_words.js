// Hajni vizsga feladata

function mirroring(str) {
  let splitStr = str.split(' ');
  let result = [];
  for (let i = 0; i < splitStr.length ; i++){
    let splitWord = splitStr[i].split('');
    let temp = '';
    for (let j = splitWord.length; j >= 0; j--) {
       if(splitWord[j] === '!' || splitWord[j] === ','||
       splitWord[j] === '.' ||splitWord[j] === '?') {
        temp = splitWord[j];
        splitWord.splice(splitWord.length-1, 1)
      } else {
        result.push(splitWord[j])
      }
    }
    if(temp === ''){
      result.push(' ')
    } else {
      result.push(temp + ' ')
    }
  }
  return result.join('');
}

console.log(mirroring('When the sun, do!'))