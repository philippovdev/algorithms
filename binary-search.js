// Array has to be sorted for binary algorithm to work!!!
/*
* Returns index of the num in the arr
* @Param {number[]} arr - Array of numbers
* @Param {...number} num - Number to search in the array
*/
const binarySearch = (arr, num) => { // Provide sorted array to search in and searching number
  let lowIndex = 0; // Initial smallest index in the array is '0'
  let highIndex = arr.length - 1; // Initial highest index in the array is it's 'length - 1' 

  while (lowIndex <= highIndex) { // Until this condition will be truthy, we do the actions below
    // Calculate the middle index of your array and floor it
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    const guess = arr[midIndex]; // Time to assign a first guess!
    // If we get it's streight in here, means we got O(1) time complexity
    if (guess === num) return midIndex;
    // If the guess is greater than searching number, we have to decrease our highest index to be 'midIndex - 1'
    if (guess > num) {
      highIndex = midIndex - 1;
    }
    // If the guess is lower than searching number, we need to increase our lowIndex by 1
    if (guess < num) {
      lowIndex = midIndex + 1;
    }
  }
  // If we didn't find index of the searching number in the array, we return null
  return null;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 14, 15, 56, 78, 90]; 

binarySearch(arr, 5); // returns 4
