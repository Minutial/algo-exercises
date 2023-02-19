// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058

/* const solve = (string) => (
  Object.values([...string].reduce((acc, char) => {
    if (/[A-Z]/.test(char)) {
      acc.upper++;
    } else if (/[a-z]/.test(char)) {
      acc.lower++;
    } else if (/[0-9]/.test(char)) {
      acc.number++;
    } else {
      acc.other++;
    }
    return acc;
  }, { upper: 0, lower: 0, number: 0, other: 0 }))
); */
function solve(s){
    let up = (s.replace(/[^A-Z]/g, "").length);
    let low = (s.replace(/[^a-z]/g, "").length);
    let num = (s.replace(/[^0-9]/g, "").length);
    let other = (s.length - (up+low+num));
  return [up,low,num,other];
  }
console.log(solve("aAbBcC"))