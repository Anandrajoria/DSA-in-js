/*
====================================================
ARRAY REDUCE TRANSFORMATION
====================================================

PLATFORM REFERENCES:
- LeetCode 2626: Array Reduce Transformation

----------------------------------------------------
PROBLEM STATEMENT:
Given an integer array nums, a reducer function fn, and an
initial value init, return the final accumulated result after
applying fn to each element from left to right.

----------------------------------------------------
EXAMPLES:
Input:  nums = [1,2,3,4], init = 0
fn:     sum(accum, curr) => accum + curr
Output: 10

Input:  nums = [], init = 25
Output: 25

----------------------------------------------------
INTUITION:
Reduction keeps one running result. Each array element updates
that result using the reducer function.

----------------------------------------------------
APPROACH:
1. Store init in result.
2. Traverse nums from left to right.
3. Update result using fn(result, nums[i]).
4. Return result after all elements are processed.

----------------------------------------------------
DRY RUN:
nums = [1,2,3,4], init = 0
result = 0
i = 0 -> result = 0 + 1 = 1
i = 1 -> result = 1 + 2 = 3
i = 2 -> result = 3 + 3 = 6
i = 3 -> result = 6 + 4 = 10

----------------------------------------------------
TIME COMPLEXITY:
O(n), because each element is processed once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only one accumulator variable is used.

----------------------------------------------------
EDGE CASES:
- Empty array returns init.
- Reducer function controls the final result.
- Works for sum, product, max, object building, and more.

====================================================
*/

let arr=[1,2,3,4]

var reduce = function(nums, fn, init) {
    // result stores the running accumulated value.
    let result = init;

    for (let i = 0; i < nums.length; i++) {
        result=fn(result,nums[i])
    }

    return result;
};
fn = function sum(accum, curr) { return accum + curr; }
console.log(reduce(arr,fn, 0));
