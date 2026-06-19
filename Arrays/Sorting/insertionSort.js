/*
====================================================
INSERTION SORT
====================================================

PLATFORM REFERENCES:
- Basic Sorting Algorithm

----------------------------------------------------
PROBLEM STATEMENT:
Sort an array in ascending order using insertion sort.

----------------------------------------------------
EXAMPLES:
Input:  [7,6,5,4,3,2,1]
Output: [1,2,3,4,5,6,7]

----------------------------------------------------
INTUITION:
Build the sorted part one element at a time. Insert the current
element into its correct position in the left sorted part.

----------------------------------------------------
APPROACH:
1. Start from index 1.
2. Store current value.
3. Shift larger previous values one step right.
4. Insert current in the correct position.

----------------------------------------------------
DRY RUN:
[7,6,5]
Insert 6 before 7 -> [6,7,5]
Insert 5 before 6 -> [5,6,7]

----------------------------------------------------
TIME COMPLEXITY:
O(n^2)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Already sorted array is efficient.
- Reverse sorted array is worst case.
- Single-element array remains same.

====================================================
*/

let arr=[7,6,5,4,3,2,1]

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let curr=arr[i]
        let prev=i-1

        while(arr[prev]>curr && prev>=0){
            arr[prev+1]=arr[prev]
            prev--
        }
        arr[prev+1]=curr
    }

return arr
}

console.log(insertionSort(arr));
