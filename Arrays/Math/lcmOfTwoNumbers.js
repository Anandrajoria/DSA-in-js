/*
====================================================
LCM OF TWO NUMBERS
====================================================

PLATFORM REFERENCES:
- Basic Number Theory / LCM and GCD

----------------------------------------------------
PROBLEM STATEMENT:
Given two integers a and b, return their least common multiple.

----------------------------------------------------
EXAMPLES:
Input:  a = 11, b = 5
Output: 55

Input:  a = 10, b = 5
Output: 10

----------------------------------------------------
INTUITION:
LCM and GCD are connected by:
lcm(a, b) = (a / gcd(a, b)) * b

----------------------------------------------------
APPROACH:
1. Use Euclid's algorithm to calculate gcd.
2. Divide a by gcd to avoid unnecessary overflow.
3. Multiply by b.
4. Return the lcm.

----------------------------------------------------
DRY RUN:
a = 11, b = 5
gcd = 1
lcm = (11 / 1) * 5 = 55

----------------------------------------------------
TIME COMPLEXITY:
O(log min(a, b))

----------------------------------------------------
SPACE COMPLEXITY:
O(log min(a, b)) because recursive gcd uses call stack.

----------------------------------------------------
EDGE CASES:
- If one number is 0, lcm should be 0.
- Negative values need absolute handling in production code.
- gcd must not be 0 before division.

====================================================
*/

function gcd(a,b){
    return b==0?a:gcd(b,a%b);
}
function lcm(a,b){
return (a/gcd(a,b))*b
}

console.log(lcm(11,5));
