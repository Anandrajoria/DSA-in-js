/*
====================================================
CHECK PRIME NUMBER
====================================================

PLATFORM REFERENCES:
- Basic DSA / Number Theory

----------------------------------------------------
PROBLEM STATEMENT:
Given an integer num, determine whether it is a prime number.
A prime number has exactly two positive factors: 1 and itself.

----------------------------------------------------
EXAMPLES:
Input:  49
Output: false

Input:  7
Output: true

----------------------------------------------------
INTUITION:
If any number from 2 to num - 1 divides num completely, then
num has an extra factor and cannot be prime.

----------------------------------------------------
APPROACH:
1. Loop from 2 to num - 1.
2. If num is divisible by any i, return false.
3. If no divisor is found, return true.

----------------------------------------------------
DRY RUN:
num = 49
i = 2 -> not divisible
i = 3 -> not divisible
...
i = 7 -> 49 % 7 == 0, return false

----------------------------------------------------
TIME COMPLEXITY:
O(n), because divisors are checked up to num - 1.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because no extra structure is used.

----------------------------------------------------
EDGE CASES:
- 0 and 1 are not prime.
- 2 is the smallest prime.
- Negative numbers are not prime.

====================================================
*/
let num=49

function isPrime(num){

    for(let i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
return true
}
console.log(isPrime(num))
