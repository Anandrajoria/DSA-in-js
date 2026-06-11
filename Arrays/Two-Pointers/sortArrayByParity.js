/*
====================================================
SORT ARRAY BY PARITY
====================================================

PLATFORM REFERENCES:
- LeetCode 905: Sort Array By Parity

----------------------------------------------------
PROBLEM STATEMENT:
Given an array of integers, rearrange it so that all even
numbers appear before all odd numbers.

----------------------------------------------------
EXAMPLES:
Input:  [3,1,2,4]
Output: [2,4,3,1]
Note: Any valid even-before-odd order is acceptable.

----------------------------------------------------
INTUITION:
Use a pointer p to mark where the next even number should be
placed. When an even number is found, swap it into position p.

----------------------------------------------------
APPROACH:
1. Set p = 0.
2. Traverse the array.
3. If arr[i] is even, swap arr[i] and arr[p].
4. Increment p.

----------------------------------------------------
DRY RUN:
arr = [3,1,2,4]
p = 0
i = 0 -> 3 odd, skip
i = 1 -> 1 odd, skip
i = 2 -> 2 even, swap with arr[0] -> [2,1,3,4], p = 1
i = 3 -> 4 even, swap with arr[1] -> [2,4,3,1]

----------------------------------------------------
TIME COMPLEXITY:
O(n), because each element is checked once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because sorting is done in-place.

----------------------------------------------------
EDGE CASES:
- All even values remain valid.
- All odd values remain valid.
- Empty array returns empty array.

====================================================
*/
let arr=[3,1,2,4]


function paritySort(arr){
    // p marks where the next even number should go.
    let p=0

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            let temp=arr[i]
            arr[i]=arr[p]
            arr[p]=temp
            p++
        }
    }
    return arr
    
}

console.log(paritySort(arr));
