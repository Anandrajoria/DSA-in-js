/*
====================================================
OPTIMIZED PRIME CHECK
====================================================

PLATFORM REFERENCES:
- Basic Number Theory / Prime Check

----------------------------------------------------
PROBLEM STATEMENT:
Given an integer n, return true if n is prime and false otherwise.
A prime number has exactly two positive divisors: 1 and itself.

----------------------------------------------------
EXAMPLES:
Input:  2
Output: true

Input:  9
Output: false

----------------------------------------------------
INTUITION:
If n has a factor greater than sqrt(n), it must also have a
matching factor smaller than sqrt(n). So checking up to i * i <= n
is enough.

----------------------------------------------------
APPROACH:
1. Return false for n <= 1.
2. Loop i from 2 while i * i <= n.
3. If n is divisible by i, return false.
4. Return true if no divisor is found.

----------------------------------------------------
DRY RUN:
n = 9
i = 2 -> not divisible
i = 3 -> 9 % 3 == 0
return false

----------------------------------------------------
TIME COMPLEXITY:
O(sqrt(n))

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- n <= 1 is not prime.
- 2 is prime.
- Perfect squares are detected by i * i <= n.

====================================================
*/

function isPrime(n){
    if(n<=1)return false

    for(let i=2;i*i<=n;i++){
        if(n%i==0){
            return false
        }
    }
    return true

}

console.log(isPrime(2));
