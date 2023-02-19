// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15


export function warnTheSheep(queue: string[]): string {
  let arrLength:number = queue.length;
  let wolfInx: number = queue.indexOf('wolf') ;
  let sheepNum: number = (arrLength - wolfInx)-1;
  if(queue.indexOf('wolf') === arrLength - 1){
    return "Pls go away and stop eating my sheep"
  }
  return `Oi! Sheep number ${sheepNum}! You are about to be eaten by a wolf!`;
}