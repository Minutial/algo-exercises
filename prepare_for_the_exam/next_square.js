https://www.codewars.com/kata/56269eb78ad2e4ced1000013

function findNextSquare(sq) {
  let root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}