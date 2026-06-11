/*
====================================================
COUNT DIGITS IN A NUMBER
====================================================

PLATFORM REFERENCES:
- Basic DSA / Number Manipulation

----------------------------------------------------
PROBLEM STATEMENT:
Given an integer num, count how many digits it contains.

----------------------------------------------------
EXAMPLES:
Input:  123456
Output: 6

Input:  0
Output: 1

----------------------------------------------------
INTUITION:
Repeatedly dividing a number by 10 removes its last digit.
The number of removals required is the digit count.

----------------------------------------------------
APPROACH:
1. If num is 0, return 1.
2. Convert negative number to positive.
3. Repeatedly divide num by 10 using Math.floor.
4. Count each division.

----------------------------------------------------
DRY RUN:
num = 123456
count = 0
123456 -> count 1
12345 -> count 2
1234 -> count 3
123 -> count 4
12 -> count 5
1 -> count 6
0 -> stop

----------------------------------------------------
TIME COMPLEXITY:
O(d), where d is the number of digits.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only counters are used.

----------------------------------------------------
EDGE CASES:
- 0 has one digit.
- Negative values should ignore the minus sign.
- Large numbers take one loop per digit.

====================================================
*/
let num=123456

function digitCount(num){
    if(num===0) return 1;

    num=num<0?-num:num

    let count=0

    while(num>0){
        count++
        num=Math.floor(num/10)
    }
    return count
}
console.log(digitCount(num));
