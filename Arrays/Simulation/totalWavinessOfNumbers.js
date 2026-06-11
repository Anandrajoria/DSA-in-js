/*
====================================================
TOTAL WAVINESS OF NUMBERS
====================================================

PLATFORM REFERENCES:
- LeetCode 3751: Total Waviness of Numbers

----------------------------------------------------
PROBLEM STATEMENT:
For every number in the range [num1, num2], count how many
middle digits are either greater than both neighboring digits
or smaller than both neighboring digits. Return the total count.

----------------------------------------------------
EXAMPLES:
Input:  num1 = 120, num2 = 130
Output: 1
Explanation: 121 has one wavy middle digit.

Input:  num1 = 100, num2 = 102
Output: 0

----------------------------------------------------
INTUITION:
A digit contributes to waviness only when it forms a peak or
valley compared to its immediate left and right digits.

----------------------------------------------------
APPROACH:
1. Loop through all numbers from num1 to num2.
2. Convert each number to a string for digit access.
3. Check only middle digits.
4. Count a digit when it is a local peak or local valley.

----------------------------------------------------
DRY RUN:
Range: 120 to 130
120 -> 2 is greater than 1 and 0 -> count 1
121 -> 2 is greater than 1 and 1 -> count 1
122 to 130 -> middle digit is not both peak or valley in most cases
Total depends on each checked digit comparison.

----------------------------------------------------
TIME COMPLEXITY:
O(r * d), where r is range size and d is digit count.

----------------------------------------------------
SPACE COMPLEXITY:
O(d), because each number is converted to a string.

----------------------------------------------------
EDGE CASES:
- One-digit and two-digit numbers have no middle digit.
- Equal neighboring digits do not form peaks or valleys.
- Large ranges increase runtime.

====================================================
*/
function totalWaviness(num1,num2){
    let total=0;

    for(let i=num1;i<=num2;i++){
        let digit=String(i);

        for(let i=1;i<digit.length-1;i++){
            if((digit[i]>digit[i-1] && digit[i]>digit[i+1])|| (digit[i]<digit[i-1]&& digit[i]<digit[i+1])){
                total+=1
            }
        }
    }
    return total
}

console.log(totalWaviness(120,130));
