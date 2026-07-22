/*
====================================================
DIVISIBILITY BY 13
====================================================

PLATFORM REFERENCES:
- Number Theory / Large Number Divisibility

----------------------------------------------------
PROBLEM STATEMENT:
Given a number as a string, determine whether it is divisible
by 13.

----------------------------------------------------
EXAMPLES:
Input:  "2911285"
Output: true

----------------------------------------------------
INTUITION:
The number can be too large for normal numeric conversion, so
calculate the remainder digit by digit.

----------------------------------------------------
APPROACH:
1. Start rem as 0.
2. Traverse each digit character.
3. Convert character to digit.
4. Update rem = (rem * 10 + digit) % 13.
5. Return true if rem is 0.

----------------------------------------------------
DRY RUN:
Process each digit of "2911285" while keeping only remainder.
Final remainder is 0, so it is divisible by 13.

----------------------------------------------------
TIME COMPLEXITY:
O(n), where n is the number of digits.

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Very large numbers work because only remainder is stored.
- Non-digit characters need validation in production code.
- "0" is divisible by 13.

====================================================
*/

function isDivisiableBy13(str){
    let rem=0

    for(let ch of str){
        let digit=ch.charCodeAt(0)-'0'.charCodeAt(0)
        rem=(rem*10+digit)%13
    }
    return rem==0
}
console.log(isDivisiableBy13('2911285'));
