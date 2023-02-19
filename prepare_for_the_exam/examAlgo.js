/*
Create a function called intersection that takes 2 arrays of integers (array1) and (array2) as an input
and returns the intersection of the 2 arrays (those elements that are present in both arrays)

You cannot use any built-in Intersect-like function that would solve this with single command.
Also, you cannot use the built-in ArrayList.contains (Java), Array.indexOf and Array.includes 
(JS/TS) methods and the in operator (Python) for checking inclusion.
Example cases:

intersection([1, 2, 3, 4, 5], [1, 2, 6, 8, 3]);
Should return [1, 2, 3]

intersection([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
Should return []

intersection([], []);
Should return []
*/

function intersection(arr1, arr2) {
    
    let result = {};
    let newArr = [];
    
    let firstArr = arr1.sort()
    let secondArr = arr2.sort()

    
    for(let i = 0; i < firstArr.length; i++) {
        if(!result[firstArr[i]]) {
            result[firstArr[i]] = firstArr[i]
        }
    }
    
    for(let i = 0; i < secondArr.length; i++) {
        if(result[firstArr[i]] === secondArr[i]) {
            newArr.push(result[firstArr[i]])
        }
    }
    
    console.log(newArr)
}

intersection([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])
