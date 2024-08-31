// Write a JavaScript program to find the sum of squares of the elements of an array.

function sumOfSquares(array) {
    let sum = 0;
  
    for (let i = 0; i < array.length; i++) {
      sum += array[i] * array[i];
    }
  
    return sum;
  }
  
  
  const numbers = [1, 2, 3, 4, 5];
  const result = sumOfSquares(numbers);
  console.log(result); 
  