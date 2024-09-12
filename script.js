const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (const num of arr) {
    // Check if adding the current number exceeds the maximum sum
    if (currentSum + num > n) {
      // If it does, push the current subarray to the result and start a new subarray
      result.push(currentSubarray);
      currentSubarray = [];
      currentSum = 0;
    }
    // Add the current number to the subarray
    currentSubarray.push(num);
    currentSum += num;
  }
  
  // Push the last subarray if it has elements
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};



const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
