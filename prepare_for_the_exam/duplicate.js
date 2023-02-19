// https://www.codewars.com/kata/59f08f89a5e129c543000069

function dup(s) {
  let result = []
  let string = ""
  for(let i = 0; i < s.length; i++){
    for(let j = 0; j < s[i].length; j++){
      if(s[i][j] !== string[string.length-1]){
        string+=s[i][j]
      }
    }
    result.push(string)
    string = ""
  }
  return result
};

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]))

function dup(s) {
	return s.map(w => {
		return w.split('').filter((c, i, arr) => {
			return c !== arr[i - 1];
		}).join('');
	});
};

const dup = (s) =>
  s.map((str) =>
    str
      .split('')
      .filter((c, i) => c !== str[i - 1])
      .join('')
  );
  
/* function dup(s) {
  const array = []; let sub = [];
  for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < s[i].length; j++) {
          if (s[i][j] !== s[i][j+1] || j == s[i].length - 1) {
              sub.push(s[i][j]);
          }
      }
      array.push(sub);
      sub = [];
  }
  return array.map(x => x.join``)
}; */