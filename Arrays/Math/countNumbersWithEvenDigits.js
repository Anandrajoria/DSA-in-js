/*
====================================================
FIND NUMBERS WITH EVEN NUMBER OF DIGITS
====================================================

PLATFORM REFERENCES:
- LeetCode 1295: Find Numbers with Even Number of Digits

----------------------------------------------------
PROBLEM STATEMENT:
Given an array of integers, return how many numbers contain
an even number of digits.

----------------------------------------------------
EXAMPLES:
Input:  [12,345,2,6,7896]
Output: 2
Explanation: 12 and 7896 have even digit counts.

Input:  [12,234,2,3,2345]
Output: 3

----------------------------------------------------
INTUITION:
Convert each number to a string and check whether the string
length is divisible by 2.

----------------------------------------------------
APPROACH:
1. Initialize count as 0.
2. Traverse the array.
3. Convert each number to a string.
4. If its length is even, increment count.
5. Return count.

----------------------------------------------------
DRY RUN:
arr = [12,234,2,3,2345]
12 -> length 2 -> even -> count 1
234 -> length 3 -> odd
2 -> length 1 -> odd
3 -> length 1 -> odd
2345 -> length 4 -> even -> count 2

----------------------------------------------------
TIME COMPLEXITY:
O(n * d), where d is the number of digits per number.

----------------------------------------------------
SPACE COMPLEXITY:
O(d), because each number is converted to a string.

----------------------------------------------------
EDGE CASES:
- Single-digit numbers are odd length.
- 0 has one digit.
- Negative numbers include "-" when converted directly to string.

====================================================
*/
let arr=[12,234,2,3,2345]

function findEven(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(String(arr[i]).length%2==0){
            count++
        }
    }
    return count
}

console.log(findEven(arr));
