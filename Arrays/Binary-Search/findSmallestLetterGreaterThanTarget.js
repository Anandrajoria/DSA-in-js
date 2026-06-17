/*
====================================================
FIND SMALLEST LETTER GREATER THAN TARGET
====================================================

PLATFORM REFERENCES:
- LeetCode 744: Find Smallest Letter Greater Than Target

----------------------------------------------------
PROBLEM STATEMENT:
Given a sorted array of letters and a target letter, return the
smallest letter greater than target. Wrap around if needed.

----------------------------------------------------
EXAMPLES:
Input:  letters = ["c","f","j"], target = "k"
Output: "c"

----------------------------------------------------
INTUITION:
Use binary search to find the first letter greater than target.
If none exists, answer wraps to letters[0].

----------------------------------------------------
APPROACH:
1. Keep answer as letters[0].
2. Binary search for a letter greater than target.
3. When found, save it and keep searching left.
4. Otherwise search right.

----------------------------------------------------
DRY RUN:
target = "k"
No letter is greater than "k", so return "c".

----------------------------------------------------
TIME COMPLEXITY:
O(log n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Target greater than all letters wraps to first.
- Duplicate letters work.
- Input letters are sorted.

====================================================
*/

let letters = ["c","f","j"]

function findSmallestLetter(letters,target){
    let left=0,right=letters.length-1
    let answer=letters[0]

    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(letters[mid]>target){
            answer=letters[mid]
            right=mid-1
        }else {
            left=mid+1
        }
    }
    return answer
}

console.log(findSmallestLetter(letters,'k'));
