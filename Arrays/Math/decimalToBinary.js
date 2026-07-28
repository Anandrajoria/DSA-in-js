/*
====================================================
DECIMAL TO BINARY
====================================================

PLATFORM REFERENCES:
- Basic Number System Conversion

----------------------------------------------------
PROBLEM STATEMENT:
Given a decimal integer n, convert it into its binary string
representation.

----------------------------------------------------
EXAMPLES:
Input:  12
Output: "1100"

----------------------------------------------------
INTUITION:
Repeatedly divide the number by 2. Each remainder is a binary
digit, collected from right to left.

----------------------------------------------------
APPROACH:
1. Start with an empty string.
2. While n is greater than 0, take n % 2.
3. Add the remainder to the front of the string.
4. Divide n by 2 using Math.floor.
5. Return the binary string.

----------------------------------------------------
DRY RUN:
n = 12
12 % 2 = 0
6 % 2 = 0
3 % 2 = 1
1 % 2 = 1
binary = "1100"

----------------------------------------------------
TIME COMPLEXITY:
O(log n)

----------------------------------------------------
SPACE COMPLEXITY:
O(log n), because the binary string is stored.

----------------------------------------------------
EDGE CASES:
- n = 0 should return "0" in production code.
- Positive integers are expected.

====================================================
*/

function decimalToBinary(n){
    let s=''
    while(n>0){
        let reminder=n%2
        s=reminder+s
        n=Math.floor(n/2)
    }
    return s
}

console.log(decimalToBinary(12));
