// https://www.codewars.com/kata/5672a98bdbdd995fad00000f


const rps = (p1, p2) => {
  let s = "scissors";
  let r = "rock";
  let p = "paper";
  if(p1 === p2) {
    return "Draw!"
  } else if (p1 === p && p2 ===r || p1 ===r && p2 === s || p1 ===s && p2 === p){
    return"Player 1 won!"
  } else {
    return "Player 2 won!"
  }
};

/* const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
}; */