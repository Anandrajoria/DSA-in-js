/*
====================================================
COUNT NEGATIVE NUMBERS WITH INPUT VALIDATION
====================================================

PLATFORM REFERENCES:
- Basic Arrays / Validation Practice

----------------------------------------------------
PROBLEM STATEMENT:
Given an input, return the count of negative numbers if the
input is a valid array of finite numbers. Return false for
invalid inputs.

----------------------------------------------------
EXAMPLES:
Input:  [-1, 0, 1]
Output: 1

Input:  [-2, -5, -7]
Output: 3

Input:  [1, "2", 3]
Output: false

----------------------------------------------------
INTUITION:
Before counting, make sure the input is actually an array and
every element is a finite number.

----------------------------------------------------
APPROACH:
1. Check whether input is an array.
2. Return 0 for an empty array.
3. Traverse every element.
4. Return false if any element is invalid.
5. Count values less than 0.

----------------------------------------------------
DRY RUN:
arr = [-1, 0, 1]
-1 is negative -> count = 1
0 is not negative
1 is not negative
Return 1.

----------------------------------------------------
TIME COMPLEXITY:
O(n), because every element is checked once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only one counter is used.

----------------------------------------------------
EDGE CASES:
- Non-array input returns false.
- Empty array returns 0.
- NaN, Infinity, strings, and objects return false.

====================================================
*/

let arr=[1,-2,3]

function countNegative(arr){
    if(!Array.isArray(arr)){
        return false
    }
    if (arr.length==0) return 0

    let count=0

    for(let num of arr){

        if(typeof num !=='number' || !Number.isFinite(num)){
            return false
        }
        if(num<0){
            count++
        }
    }
    return count
}

console.log(countNegative([-1, 0, 1]));
console.log(countNegative([-2, -5, -7]));
console.log(countNegative([0, 2, 3]));
console.log(countNegative([]));

console.log(countNegative(null));
console.log(countNegative(undefined));
console.log(countNegative(42));
console.log(countNegative("8"));
console.log(countNegative({}));
console.log(countNegative(() => {}));

console.log(countNegative([1, "2", 3]));
console.log(countNegative([1, NaN, 3]));
console.log(countNegative([1, Infinity]));
console.log(countNegative([-Infinity]));
