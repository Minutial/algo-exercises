/*12. Second largest perimeter
Create a function called secondLargestPerimeter that takes an array of triangles (triangles) as an input,
(a triangle is represented by an array with 3 integers which are the length of its sides)
and returns the index of the triangle which has the second largest perimeter.
It should return -1 if the size of the array is less than 2.
note: you don't have to create a Triangle class and you might assume that all triangles are valid

Example cases:
secondLargestPerimeter([[2, 3, 4], [4, 5, 6], [7, 8, 9], [10, 11, 12]]);
Should return 2, because the [7, 8, 9] triangle has the second largest perimeter
secondLargestPerimeter([[2, 3, 4], [4, 5, 6]]);
Should return 0, because the [2, 3, 4] triangle has the second largest perimeter
secondLargestPerimeter([]);
Should return -1 */
function secondLargestPerimeter(triangles){
    let sum = 0;
    let allSum = [];
    if ( triangles.length < 2){
        return -1;
    }
    for (let i = 0; i < triangles.length; i++) {
        for (let j = 0; j < triangles[i].length; j++) {
            sum += triangles[i][j];
        }
        allSum.push(sum)
        sum = 0;
    }
    let sorted = allSum;
    for (let i = 0; i < allSum.length; i++){
        for (let j = 0; j < i ; j++) {
            if(allSum[i] < allSum[j]){
                let x = allSum[i];
                allSum[i] = allSum[j];
                allSum[j] = x
            }
        }
    }
    console.log(allSum)
    let secongH = sorted[sorted.length-2];
    for (let i = 0; i < allSum.length; i++) {
        if (allSum[i] === secongH)
            return i;
    }
}
/* 
function secondLargestPerimeter(arr) {
    let solution = [];
    for (let triangle in arr) {
        let sum =0;
        sum = arr[triangle][0]+arr[triangle][1]+arr[triangle][2]
        solution.push(sum)
    }
    solution.sort((b,a) => b-a)
    return solution[solution.length-2]
}
console.log(secondLargestPerimeter([[2, 23, 4], [4, 5, 6], [7, 8, 9], [10, 11, 12]]));


function secondLargestPerimeter(triangles) {
    if (triangles.length === 0) {
        return -1;
    }

    let actualPerimeter = 0
    let largestPerimeter = 0
    let indexOfLargest = 0
    let indexOfSecondLargest = 0


    for (let i = 0; i < triangles.length; i++) {
        if (i === 0) {
            for (let j = 0; j < triangles[i].length; j++) {
                largestPerimeter += triangles[i][j];
            }
        }
        else {
            actualPerimeter = 0;
            for (let j = 0; j < triangles[i].length; j++) {
                actualPerimeter += triangles[i][j];
            }
            if (actualPerimeter > largestPerimeter) {
                largestPerimeter = actualPerimeter;
                indexOfSecondLargest = indexOfLargest;
                indexOfLargest = i;
            }
        }
    }
    return indexOfSecondLargest;
} */