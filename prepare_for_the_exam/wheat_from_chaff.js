function wheatFromChaffs(values) {
  let len = values.length;
for (let i = 0; i < len; i++) {
   if (values[i] > 0) {
       for (let j = len; j > i; j--) {
           if (values[j] < 0) {
               [values[i], values[j]] = [values[j], values[i]];
               len = j;
               break;
           }
       }
   }
}
return values;
}

//console.log(wheatFromChaffs([39,46,17]))
// console.log(wheatFromChaffs([-32,-45,-2,-5,-6,-17]))
// console.log("it should be:")
//console.log("[46,39,-45,-2,-5,-6,-17,-32,17]")
console.log(wheatFromChaffs([46,39,-45,-2,-5,-6,-17,-32,17]))
// console.log("it should be:)
// console.log(wheatFromChaffs("[-32,-17,-45,-2,-5,-6,39,46,17]"));

// console.log(wheatFromChaffs());