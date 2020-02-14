// Given a matrix A, return the transpose of A.

// The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.



 

// Example 1:

// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]
// Example 2:

// Input: [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]


function transpose(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push([]);
    };

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            newArray[j].push(array[i][j]);
        };
    };

    return newArray;
}

console.log(transpose( [[1,2,3],[4,5,6],[7,8,9]]));
console.log(transpose( [[1,2,3],[4,5,6]]));