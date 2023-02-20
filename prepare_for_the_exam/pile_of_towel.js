function sortThePile(pileOfTowels, weeklyUsedTowels) {
  console.log(pileOfTowels)
  console.log(weeklyUsedTowels)
    let used = pileOfTowels.length - Math.max(...weeklyUsedTowels)
    for (let i = 0; i < weeklyUsedTowels.length ; i++){
        for (let j = used; j < pileOfTowels.length; j++){
            if(pileOfTowels[j] === "blue" && pileOfTowels[j+1] === "red" ){
                pileOfTowels[j] = "red";
                pileOfTowels[j+1] = "blue";
              i--;
              j--;
            }
        }
    }
    return pileOfTowels;
}

function sortThePile(pileOfTowels, weeklyUsedTowels) {
  let numOfTowels = pileOfTowels.length;
  
  while (weeklyUsedTowels.length > 0) {
    let currentUse = weeklyUsedTowels.shift();
    
    let towelsUsed = pileOfTowels.slice(numOfTowels-currentUse);
    
    towelsUsed.sort().reverse();
    
    pileOfTowels.splice(numOfTowels-currentUse, currentUse, ...towelsUsed);
  }
  
  return pileOfTowels;
}


function sortThePile(pileOfTowels, weeklyUsedTowels) {
  for(const number of weeklyUsedTowels) {
    towelSort(pileOfTowels, number);
  }
  return pileOfTowels;
}

function towelSort(arr, idx) {
  let start = arr.length - idx;
  for (let i = start; i < arr.length; i++) {
        for (let l = start, r = start + 1; r < arr.length; l++, r++) {
            if (arr[l] === "blue" && arr[r] === "red") {
                arr[l] = "red";
                arr[r] = "blue";
            }
        }
    }
}