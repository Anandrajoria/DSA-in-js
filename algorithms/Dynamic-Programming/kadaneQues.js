let arr = [-2,1,-3,4,-1,2,1,-5,4]
let maxSum = -Infinity;
let cursum = 0;

function subArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    cursum += arr[i];
    maxSum=Math.max(cursum,maxSum)
    if (cursum < 0) {
      // Negative running sum is dropped because it hurts future subarrays.
      cursum = 0;
    }
  }
 return maxSum
}

console.log(subArray(arr));
