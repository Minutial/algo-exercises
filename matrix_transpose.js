// https://www.codewars.com/kata/52fba2a9adcd10b34300094c

function transpose(matrix) {
    return matrix[0].map((column, i) => matrix.map(row => row[i]));
}
