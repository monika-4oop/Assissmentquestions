// 1 Write a program to efficiently find out if a given number is a prime number?   What is the time complexity of the same.

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }  
  
  
  // The time complexity of this function is O(n)
  
  // 2  Write a program to find the sum of all sub-arrays with sum equal to an input K.
  
  function subarraySum(nums, k) {
    let count = 0;
    let preSum = 0;
    let map = new Map();
    map.set(0, 1);
    
    for (let i = 0; i < nums.length; i++) {
        preSum += nums[i];
        if (map.has(preSum - k)) {
            count += map.get(preSum - k);
        }
        if (!map.has(preSum)) {
            map.set(preSum, 0);
        }
        map.set(preSum, map.get(preSum) + 1);
    }
    
    return count;
  }
  
  // 3. Sort the given array with integer numbers. For example : Given input [0,-1,10,5] and the expected output is [-1,0,5,10].
  
  
  function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    return arr;
  }
  