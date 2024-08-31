// Write a JavaScript program to find the most frequent item of an array

function findMostFrequentItem(array) {
    if (array.length === 0) return null;
  
    const frequency = {};
    let mostFrequentItem = array[0];
    let maxFrequency = 0;
  
    for (let item of array) {
      frequency[item] = (frequency[item] || 0) + 1;
  
      if (frequency[item] > maxFrequency) {
        maxFrequency = frequency[item];
        mostFrequentItem = item;
      }
    }
  
    return mostFrequentItem;
  }
  
  const items = [1, 3, 2, 3, 4, 1, 3, 2, 1, 1];
  const result = findMostFrequentItem(items);
  console.log(result); 
  