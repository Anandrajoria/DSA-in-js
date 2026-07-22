/*
====================================================
CLOSEST NUMBER DIVISIBLE BY M
====================================================

PLATFORM REFERENCES:
- Basic Math / Divisibility Practice

----------------------------------------------------
PROBLEM STATEMENT:
Given two integers n and m, find the number closest to n that is
divisible by m. If two numbers are equally close, return the one
with greater absolute value.

----------------------------------------------------
EXAMPLES:
Input:  n = 13, m = 4
Output: 12

Input:  n = 15, m = 6
Output: 18

----------------------------------------------------
INTUITION:
The closest divisible number must be either the lower multiple
or the upper multiple around n.

----------------------------------------------------
APPROACH:
1. Find the remainder n % m.
2. Build the lower multiple by subtracting the remainder.
3. Build the upper multiple by moving to the next multiple.
4. Compare distances from n.
5. Return the closer one.

----------------------------------------------------
DRY RUN:
n = 13, m = 4
lower = 12
upper = 16
distance to 12 is 1
distance to 16 is 3
return 12

----------------------------------------------------
TIME COMPLEXITY:
O(1)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- n already divisible by m returns n.
- m should not be 0.
- Tie returns the value with greater absolute value.

====================================================
*/

function closetNumber(n,m){
    if(m===0) return null

    let lower=n-(n%m)
    let upper=lower+(n>=0?Math.abs(m):-Math.abs(m))

    if(Math.abs(n-lower)<Math.abs(n-upper)){
        return lower
    }
    if(Math.abs(n-lower)>Math.abs(n-upper)){
        return upper
    }
    return Math.abs(lower)>Math.abs(upper)?lower:upper
}
console.log(closetNumber(13,4));
