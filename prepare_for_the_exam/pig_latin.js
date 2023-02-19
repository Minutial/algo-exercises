// https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
  var arrayWord = str.split(' ');
  
  return arrayWord.map(function(word) {
    if(word === '!' || word === '?' ||word === '.'){
     return word
    }
    var firstLetter = word.charAt(0);
    
    return word.slice(1) + firstLetter + 'ay';
  }).join(' ');
}
/*  function pigIt(str){
    let newStr="";
    const array=str.split(" ");
    for (let i of array){
        let firstLetter="";
        for(let j in i){
            if(j==='0'){
                firstLetter+=i[j];
            }
            else{
                newStr+=i[j];
            }
        }
        newStr+=firstLetter;
        newStr+=" ";
    }
    let newArray=newStr.split(" ");
    newArray.pop();//delete the empty space
    let result="" //store the result
    for(let index of newArray){
        if (index.length!=1){
            result+=index;
            result+="ay";
            result+=" ";        
        }
        else if (index.length==1){
                if(index=="?" ||index=="!" ||index=="."){ //use to check if the last length is not equal symbol
                result+=index;
                }
                else{
                    result+=index;
                    result+="ay";
                    result+=" ";               
            }
            
        }
    }
    
    if(result[result.length-1] ===" "){
        result=result.slice(0,result.length-1);
    }
    return(result);
}  */
console.log('This is my string!')
console.log(pigIt('This is my string!'))