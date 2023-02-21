/*Money exchange
Create a function that takes a string (text), another string as target currency,
an array of strings (with currencies) and an array with decimal numbers
(exchange rates of 1 EUR to the corresponding currency). The function looks for the amount of money
with the currency string attached, and replaces them with the correct value
in the provided currency. Round the result of the currency conversion to 2 decimal points. Example cases:
moneyExchange(
  "Apples cost 300 HUF in my city.",
  "CZK",
  ["EUR", "HUF", "GBP", "CAD", "CZK", "PLN"],
  [1,      360,   0.84,  1.43,   24,    5],
);
Should return "Apples cost 20 CZK in my city.".*/

function exchange(text,currency,exchanges,values) {
  let words = text.split(' ');
  let currValue = parseInt(words[2]);
  let currExchange = words[3];
  let result = 0;
  for (let i = 0; i < exchanges.length;i++){
      if(exchanges[i] === currExchange) {
      result = currValue / values[i]
      }
  }
  for (let i = 0; i < exchanges.length;i++) {
      if (currency === exchanges[i]) {
          result = (result * values[i]).toFixed(2)
      }
  }
  return `${words[0]} ${words[1]} ${result} ${currency} in my city.`
}
console.log(exchange("Apples cost 300 HUF in my city.", "CAD", ["EUR", "HUF", "GBP", "CAD", "CZK", "PLN"],[1, 360, 0.84, 1.43, 24, 5]))