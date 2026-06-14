/*
====================================================
SUBTRACT PRODUCT AND SUM OF DIGITS
====================================================

PLATFORM REFERENCES:
- LeetCode 1281: Subtract the Product and Sum of Digits of an Integer

----------------------------------------------------
PROBLEM STATEMENT:
Given an integer num, return the difference between the product
of its digits and the sum of its digits.

----------------------------------------------------
EXAMPLES:
Input:  234
Output: 15
Explanation: product = 2*3*4 = 24, sum = 2+3+4 = 9, answer = 15.

Input:  4421
Output: 21

----------------------------------------------------
INTUITION:
Each digit contributes once to the product and once to the sum.
Modulo 10 gets the last digit, and division by 10 removes it.

----------------------------------------------------
APPROACH:
1. Initialize sum as 0 and product as 1.
2. While num is greater than 0, extract digit = num % 10.
3. Add digit to sum and multiply digit into product.
4. Remove the last digit using Math.floor(num / 10).
5. Return product - sum.

----------------------------------------------------
DRY RUN:
num = 234
digit 4 -> product 4, sum 4
digit 3 -> product 12, sum 7
digit 2 -> product 24, sum 9
Return 24 - 9 = 15.

----------------------------------------------------
TIME COMPLEXITY:
O(d), where d is the number of digits.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only sum and product are used.

----------------------------------------------------
EDGE CASES:
- Digits containing 0 make product 0.
- Single digit returns digit - digit = 0.
- Negative numbers need separate handling in production code.

====================================================
*/

let num=234

function subtractProductAndSum(num){
    let sum=0,product=1

    while(num>0){
        let digit=num%10
        product*=digit
        sum+=digit
        num=Math.floor(num/10)
    }
    return (product-sum)
}
console.log(subtractProductAndSum(234));
