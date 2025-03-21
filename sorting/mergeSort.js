// function mergeSort(arr){
//     //base cases
//     if(arr.length<=1)return arr;

//     let mid=Math.floor(arr.length/2);

//     let left=mergeSort(arr.slice(0,mid))
//     let right=mergeSort(arr.slice(mid))

//     return merge(left,right)
// }

// function merge(left,right){
//     let sortedArr=[]

//     while(left.length&& right.length){
//         if(left[0]<right[0]){
//             sortedArr.push(left.shift())
//         }else{
//             sortedArr.push(right.shift())
//         }
//     }
//     return [...sortedArr,...left,...right]
// }

// console.log(mergeSort([8,5,3,2,6,1,4,9,5]));



//! split the array
function mergeSort(arr) {
  //best case : if there has only one element it's already sorted
  if (arr.length <= 1) return arr;

  // find the middle index
  const mid = Math.floor(arr.length / 2);

  //split the array into two halfs
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  //recursely sort both halfs
  const leftHalf = mergeSort(left);
  const rightHalf = mergeSort(right);

  //merge the sorted array into single sorted array
  return merge(leftHalf, rightHalf);
}

function merge(left, right) {
  const merge = [];
  let leftIdx = 0;
    let rightIdx = 0;

  //merge smaller element first

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] <= right[rightIdx]) {
      merge.push(left[leftIdx]);
      leftIdx++;
    } else {
      merge.push(right[rightIdx]);
      rightIdx++;
    }
  }
  return merge.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));

}
console.log(mergeSort([4,1,3,7,9,5]));
