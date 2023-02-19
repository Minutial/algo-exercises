// https://www.codewars.com/kata/525c65e51bf619685c000059
let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

function cakes(recipe, available) {
  let quantityCakes = 0;
  let recipeKeys = Object.keys(recipe);
  console.log(recipeKeys)
  for (let i = 0; i < recipeKeys.length; i++ ){
    let ingredient = recipeKeys[i];
    console.log(ingredient)
    if ( !available[ingredient] ) {
      quantityCakes = 0;
      break;
    } else {
      let maxQuantity = Math.floor(available[ingredient] / recipe[ingredient]);
      if ( i === 0 || quantityCakes > maxQuantity ) {
        quantityCakes = maxQuantity;
      }
    }
  }
  
  return quantityCakes;
}


console.log(cakes(recipe, available))