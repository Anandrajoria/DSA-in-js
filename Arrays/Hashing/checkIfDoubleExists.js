/*
====================================================
CHECK IF N AND ITS DOUBLE EXIST
====================================================

PLATFORM REFERENCES:
- LeetCode 1346: Check If N and Its Double Exist

----------------------------------------------------
PROBLEM STATEMENT:
Given an array of integers, check whether there exist two
different indices i and j such that arr[i] == 2 * arr[j].

----------------------------------------------------
EXAMPLES:
Input:  [10,2,5,3]
Output: true
Explanation: 10 is double of 5.

Input:  [10,2,7,5]
Output: true
Explanation: 10 is double of 5.

----------------------------------------------------
INTUITION:
While scanning numbers, keep previously seen values. For the
current number, check whether its double or half was seen before.

----------------------------------------------------
APPROACH:
1. Create a Set to store seen numbers.
2. For each number, check if 2 * num exists in seen.
3. Also check if num / 2 exists when num is even.
4. Add current number to seen.
5. Return false if no pair is found.

----------------------------------------------------
DRY RUN:
arr = [10,2,7,5]
seen = {}
10 -> no match, add 10
2 -> no match, add 2
7 -> no match, add 7
5 -> seen has 10, return true

----------------------------------------------------
TIME COMPLEXITY:
O(n), because Set lookup is average O(1).

----------------------------------------------------
SPACE COMPLEXITY:
O(n), because seen values are stored.

----------------------------------------------------
EDGE CASES:
- Two zeros return true because 0 is double of 0.
- Negative numbers work with the same logic.
- Odd numbers should not check fractional halves.

====================================================
*/
let arr=[10,2,7,5]

function isDoubleExists(arr){
    // Store visited numbers for fast double/half lookup.
    let seen=new Set()

    for(let num of arr){
        if(seen.has(2*num) || (num%2===0 && seen.has(num/2))){
            return true
        }
        seen.add(num)
    }

    return false
}
console.log(isDoubleExists(arr));
