// // sub array using brute force
// let arr = [1, 2, 3, 4, 5];

// function subArray(arr) {
//   for (let st = 0; st < arr.length; st++) {
//     let row = "";
//     for (let end = st; end < arr.length; end++) {

//       for (let i = st; i <= end; i++) {
//         row += arr[i];
//       }
//       row += " ";
//     }
//     console.log(row);

//   }
// }

// console.log(subArray(arr));

// Max sum array brute force
// let arr = [3,-4,5,4,-1,7,-8];
// let maxSum=0
// function subArray(arr) {
//   for (let st = 0; st < arr.length; st++) {
//     let curSum=0
//     for (let end = st; end < arr.length; end++) {
//       curSum+=arr[end]
//       maxSum=Math.max(curSum,maxSum)
//     }

//   }
//   return maxSum
// }

// console.log(subArray(arr));

// ! kadane's algo

let arr = [-2,1,-3,4,-1,2,1,-5,4]
let maxSum = -Infinity;
let cursum = 0;
let start = 0;
let end = 0;
let tempStart = 0;
function subArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    cursum += arr[i];
    // maxSum = Math.max(cursum, maxSum);
    if(cursum>maxSum){
      maxSum=cursum
      start=tempStart
      end=i
    }
    if (cursum < 0) {
      cursum = 0;
      tempStart=i+1
    }
  }
 return arr.slice(start, end + 1);
}

console.log(subArray(arr));
