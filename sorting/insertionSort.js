/*
STEPS:
1: consider 2nd element , arr[1]- start yahi se hoga
2: arr[j]> cur - swapping hogi
 */

function insertionSort(){
  for(let i=1;i<arr.length;i++){  // outer loop that goes toward right side
    let cur=arr[i];  //store the 2nd element for comparison

    let j=i-1;

    while(j>=0 && arr[j]>cur){ 
      arr[j+1]=arr[j]
      j--;
    }
    arr[j+1]=cur   
  }
  return arr
}

const arr=[7,8,2,4,1]
console.log(insertionSort(arr));


/*

Best Case (Already Sorted)	O(n)
Average Case	O(n²)
Worst Case (Reverse Sorted)	O(n²)
 */