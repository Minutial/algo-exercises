// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data){
let output = [];
for(i=0; i<data.length; i++){
  if(data[i][0]>=55 && data[i][1]>7){
    output.push("Senior");
  }else{
    output.push("Open");
  }
}
return output;
};

console.log(openOrSenior([]))

module.exports = openOrSenior;