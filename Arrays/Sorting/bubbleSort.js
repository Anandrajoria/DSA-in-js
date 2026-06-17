/*
====================================================
BUBBLE SORT
====================================================

PLATFORM REFERENCES:
- Basic Sorting Algorithm

----------------------------------------------------
PROBLEM STATEMENT:
Given an array, sort it in ascending order using bubble sort.

----------------------------------------------------
EXAMPLES:
Input:  [5,2,4,1]
Output: [1,2,4,5]

----------------------------------------------------
INTUITION:
Repeatedly compare adjacent elements and swap them if they are
in the wrong order. The largest element bubbles to the end.

----------------------------------------------------
APPROACH:
1. Run outer passes over the array.
2. Compare adjacent pairs.
3. Swap when arr[j] > arr[j + 1].
4. Stop early if a full pass has no swaps.

----------------------------------------------------
DRY RUN:
[5,2,4,1]
Pass 1 -> [2,4,1,5]
Pass 2 -> [2,1,4,5]
Pass 3 -> [1,2,4,5]

----------------------------------------------------
TIME COMPLEXITY:
O(n^2)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Already sorted array stops early.
- Single element array remains same.
- Duplicate values are handled.

====================================================
*/

let arr=[5,2,3,1]

function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        let isSwapped=false
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                isSwapped=true
            }
        }
        if(!isSwapped)break
    }
    return arr
}

console.log(bubbleSort([5,2,4,1]));
