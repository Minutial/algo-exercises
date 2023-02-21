function getMostProfitFromStockQuotes(quotes) {
  let profit = 0;
  let stockCount = 0;
  for (let i = 0; i < quotes.length; i++) {
    let bestPrice = quotes[i];
    for (let j = i + 1; j < quotes.length; j++) {
      if (quotes[j] > bestPrice) {
        bestPrice = quotes[j];
      }
    }

    if (bestPrice > quotes[i]) {
      stockCount++;
      profit -= quotes[i];
    } else if (bestPrice == quotes[i]) {
      profit += stockCount * bestPrice;
      stockCount = 0;
    }
  }

  return profit;
}
console.log(getMostProfitFromStockQuotes([ 1, 2, 10, 3, 2, 7, 3, 2]))
/*function getMostProfitFromStockQuotes(quotes) {
  let profit = 0;
  let numOfStocks = 0;
  for (let i = 0; i < quotes.length; i++) {
      if (quotes[i+1] && quotes[i+1] > quotes[i] || quotes[i] !== Math.max(...quotes.slice(i))) {
          numOfStocks++;
        profit -= quotes[i];
      } else {
        profit += numOfStocks * quotes[i];
        numOfStocks = 0;
      }    
  }
  return profit;
}*/
//console.log(getMostProfitFromStockQuotes([ 6, 5, 4, 3, 2, 1 ]))

/*
function getMostProfitFromStockQuotes(quotes) {
  let highest= 0
  let result= 0
  quotes= quotes.reverse()
  for(let index = 0; index < quotes.length; index++){
    quotes[index] < highest? result += (highest - quotes[index]): highest = quotes[index]  
  }
  return result
  }
  
  function getMostProfitFromStockQuotes(q) {
  return q.reduceRight(
   ([max, profit], next) =>
     next > max
       ? [next, profit]
       : [max, profit + max - next],
   [-Infinity, 0]
 )[1];
}
   */