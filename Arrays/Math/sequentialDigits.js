/*
====================================================
SEQUENTIAL DIGITS
====================================================

PLATFORM REFERENCES:
- LeetCode 1291: Sequential Digits

----------------------------------------------------
PROBLEM STATEMENT:
Given a range [low, high], return all numbers in the range whose
digits are sequential, meaning every digit is one more than the
previous digit.

----------------------------------------------------
EXAMPLES:
Input:  low = 100, high = 300
Output: [123,234]

Input:  low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]

----------------------------------------------------
INTUITION:
Sequential numbers can be generated directly by choosing a
starting digit and appending the next increasing digits.

----------------------------------------------------
APPROACH:
1. Choose a starting digit from 1 to 9.
2. Keep appending the next digit.
3. Add the number if it lies inside [low, high].
4. Stop extending when the number exceeds high.
5. Sort the answer before returning.

----------------------------------------------------
DRY RUN:
low = 100, high = 300
start = 1 -> 12, 123 added, 1234 too high
start = 2 -> 23, 234 added
answer = [123,234]

----------------------------------------------------
TIME COMPLEXITY:
O(1), because there are at most 36 sequential digit candidates.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), ignoring the output array.

----------------------------------------------------
EDGE CASES:
- No number in range returns [].
- Values over 9 digits cannot be formed by this loop.
- Sorting keeps output in ascending order.

====================================================
*/

function sequentialNumber(low,high){
    let ans=[]

    for(let start=1;start<=9;start++){
        let num=start;

        for(let next=start+1;next<=9;next++){
            num=num*10+next

            if(num>=low && num<=high){
                ans.push(num)
            }
            if(num>high){
                break
            }
        }
    }
    ans.sort((a,b)=>a-b)
    return ans
}

console.log(sequentialNumber(100,300));
