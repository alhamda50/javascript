// Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 

function isPrimeNumber(array) {
    
    const num = array[0];
    if (num < 2) {
      return false;
    }
  
    if (num === 2) {
      return true;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const numbers = [5, 14, 18];
  const result = isPrimeNumber(numbers);
  console.log("First element of the array is " +numbers[0]);
  console.log(result + ", The first element " + numbers[0] + " is a prime number");
  