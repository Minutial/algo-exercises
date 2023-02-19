// https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
  let finalPoint = 0;
  for (let match of games){
      let oneMatch = match.split(':');
      if(oneMatch[0] === oneMatch[1]){
          finalPoint += 1;
      }
      if(oneMatch[0] > oneMatch[1]){
          finalPoint += 3;
      }
  }
  return finalPoint;
}

const points = a => a.reduce((r, e) => {
  const x = e[0];
  const y = e[2];
  return r + (x > y ? 3 : x < y ? 0 : 1);
}, 0);

console.log("should return: 30:")

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))

console.log("should return 10:")
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]))

console.log("should return: 12")
console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]))