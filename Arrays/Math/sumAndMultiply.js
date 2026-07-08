/*
====================================================
SUM AND MULTIPLY
====================================================

PLATFORM REFERENCES:
- LeetCode 3754: Sum and Multiply

----------------------------------------------------
PROBLEM STATEMENT:
Given an integer x, remove all zero digits, form the remaining
number, calculate the sum of its digits, and return:
sum_of_digits * formed_number.

----------------------------------------------------
EXAMPLES:
Input:  10203004
Output: 12340
Explanation: Remove zeros -> 1234, digit sum = 10,
answer = 1234 * 10 = 12340.

----------------------------------------------------
INTUITION:
Zeros do not contribute to the new number. After creating the
non-zero digit number, multiply it by the digit sum.

----------------------------------------------------
APPROACH:
1. Convert x to string.
2. Remove all zero characters.
3. Convert back to number.
4. Calculate digit sum.
5. Return sum * number.

----------------------------------------------------
DRY RUN:
x = 10203004
remove zeros -> 1234
sum = 1 + 2 + 3 + 4 = 10
return 1234 * 10

----------------------------------------------------
TIME COMPLEXITY:
O(d), where d is the number of digits.

----------------------------------------------------
SPACE COMPLEXITY:
O(d), because string conversion creates a new string.

----------------------------------------------------
EDGE CASES:
- Number containing only zeros becomes 0.
- Single non-zero digit returns digit * digit.
- Large numbers may exceed JavaScript safe integer range.

====================================================
*/

function sumAndMultiply(x){
    let num=Number(x.toString().replace(/0/g,""))
    let sum=0
    let result= num
    while(num>0){
        sum+=num%10
        num=Math.floor(num/10)
    }
    return sum*result
}

console.log(sumAndMultiply(10203004));
