/*
====================================================
FIND GCD OF ARRAY MINIMUM AND MAXIMUM
====================================================

PLATFORM REFERENCES:
- LeetCode 1979: Find Greatest Common Divisor of Array

----------------------------------------------------
PROBLEM STATEMENT:
Given an integer array, find the greatest common divisor of the
smallest and largest numbers in the array.

----------------------------------------------------
EXAMPLES:
Input:  [2,3,4,5,6,9,10]
Output: 2

----------------------------------------------------
INTUITION:
The problem only asks for gcd of minimum and maximum, so first
find those two values, then apply Euclid's algorithm.

----------------------------------------------------
APPROACH:
1. Initialize min and max using arr[0].
2. Traverse the array to update min and max.
3. Use Euclid's algorithm on min and max.
4. Return the gcd.

----------------------------------------------------
DRY RUN:
arr = [2,3,4,5,6,9,10]
min = 2, max = 10
gcd(2,10) = 2

----------------------------------------------------
TIME COMPLEXITY:
O(n + log m), where m is the larger number.

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Single-element array returns that element.
- All equal values return that value.
- Positive integers are expected.

====================================================
*/

let arr=[2,3,4,5,6,9,10]

function gccdOfArray(arr){
    let min=arr[0]
    let max=arr[0]
    for(let num of arr){
        if(num<min) min=num
        if(num>max) max=num
    }

    while(max!==0){
        let reminder=min%max
        min=max
        max=reminder
    }
    return min
}

console.log(gccdOfArray(arr));
