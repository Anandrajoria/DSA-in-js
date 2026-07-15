/*
====================================================
GCD OF ODD AND EVEN SUMS
====================================================

PLATFORM REFERENCES:
- Math / Number Theory Practice

----------------------------------------------------
PROBLEM STATEMENT:
For a given n, calculate:
- the sum of the first n odd numbers
- the sum of the first n even numbers
Then return the greatest common divisor of both sums.

----------------------------------------------------
EXAMPLES:
Input:  4
Odd sum:  1 + 3 + 5 + 7 = 16
Even sum: 2 + 4 + 6 + 8 = 20
Output: 4

----------------------------------------------------
INTUITION:
The sum of first n odd numbers is n^2.
The sum of first n even numbers is n(n + 1).
Their gcd is always n.

----------------------------------------------------
APPROACH:
1. Build odd and even sums using loops.
2. Apply Euclid's algorithm to find gcd.
3. Optimized version directly returns n.

----------------------------------------------------
DRY RUN:
n = 4
odd = 16
even = 20
gcd(20, 16) -> gcd(16, 4) -> gcd(4, 0) = 4

----------------------------------------------------
TIME COMPLEXITY:
Loop version: O(n + log n)
Optimized version: O(1)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- n = 1 returns 1.
- Positive n is expected.
- Optimized formula avoids loops.

====================================================
*/

function gcdOfOddEvenSums(n){
    let odd=0
    let even=0
    for(let i=1;i<=2*n-1;i+=2){
        odd+=i
    }
    for(let i=0;i<=2*n;i+=2){
        even+=i
    }

    while(odd!==0){
        let rem=even%odd;
        even=odd
        odd=rem

    }
    return even
}
function gcdOfOddEvenSums2(n){
    return n
}

console.log(gcdOfOddEvenSums(4));
console.log(gcdOfOddEvenSums2(4));
