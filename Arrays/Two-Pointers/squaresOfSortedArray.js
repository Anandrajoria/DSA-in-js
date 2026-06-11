/*
====================================================
SQUARES OF A SORTED ARRAY
====================================================

PLATFORM REFERENCES:
- LeetCode 977: Squares of a Sorted Array

----------------------------------------------------
PROBLEM STATEMENT:
Given a non-decreasing sorted array, return a new array of the
squares of each number, also sorted in non-decreasing order.

----------------------------------------------------
EXAMPLES:
Input:  [-4,-1,0,3,10]
Output: [0,1,9,16,100]

Input:  [-7,-3,2,3,11]
Output: [4,9,9,49,121]

----------------------------------------------------
INTUITION:
The largest square can come from either the most negative value
on the left or the largest positive value on the right.

----------------------------------------------------
APPROACH:
1. Use p1 at the start and p2 at the end.
2. Compare left square and right square.
3. Fill the output array from the last index backward.
4. Move the pointer whose square was placed.

----------------------------------------------------
DRY RUN:
arr = [-4,-1,0,3,10]
left square = 16, right square = 100 -> place 100
left square = 16, right square = 9 -> place 16
left square = 1, right square = 9 -> place 9
left square = 1, right square = 0 -> place 1
place 0
Result: [0,1,9,16,100]

----------------------------------------------------
TIME COMPLEXITY:
O(n), because each pointer moves inward once.

----------------------------------------------------
SPACE COMPLEXITY:
O(n), because a new sorted array is created.

----------------------------------------------------
EDGE CASES:
- All negative values still work.
- All positive values still work.
- Zeros produce zero squares.

====================================================
*/
let arr=[-4,-1,0,3,10]

function squareOfSortedArr(arr){
    // Compare both ends because the largest square may come from either side.
    let p1=0
    let p2=arr.length-1
    let sortedarr=new Array(arr.length)
    let idx=arr.length-1

    while(p1<=p2){
        let leftSquare=arr[p1]*arr[p1]
        let rightSquare=arr[p2]*arr[p2]

        if(leftSquare>rightSquare){
            sortedarr[idx]=leftSquare
            p1++
        }else{
            sortedarr[idx]=rightSquare
            p2--
        }
        idx--
    }

    return sortedarr
    
}

console.log(squareOfSortedArr(arr));
