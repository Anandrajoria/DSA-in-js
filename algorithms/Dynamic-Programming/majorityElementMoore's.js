/*
====================================================
MAJORITY ELEMENT
====================================================

PLATFORM REFERENCES:
- LeetCode 169: Majority Element
- Boyer-Moore Voting Algorithm

----------------------------------------------------
PROBLEM STATEMENT:
Given an array nums, return the element that appears more than
n / 2 times. The majority element is guaranteed to exist.

----------------------------------------------------
EXAMPLES:
Input:  [3,2,3]
Output: 3

Input:  [2,2,1,1,1,2,2]
Output: 2

----------------------------------------------------
INTUITION:
Majority element occurrences can cancel out all other elements
and still remain as the final candidate.

----------------------------------------------------
APPROACH:
1. Keep a candidate majority value.
2. Keep a vote counter.
3. If votes become 0, choose the current value as candidate.
4. Add vote for matching value, subtract vote otherwise.
5. Return the final candidate.

----------------------------------------------------
DRY RUN:
nums = [3,2,3]
3 -> candidate 3, votes 1
2 -> different, votes 0
3 -> candidate 3, votes 1
Return 3.

----------------------------------------------------
TIME COMPLEXITY:
O(n), because the array is scanned once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only candidate and votes are stored.

----------------------------------------------------
EDGE CASES:
- Single element is the majority.
- Majority is guaranteed by the problem.
- Without guarantee, a second verification pass is needed.

====================================================
*/

let nums=[3,2,3]

function majorityEle(arr){
    let majority=arr[0]
    let votes=0

    for(let i=0;i<arr.length;i++){
        if(arr[i]==majority){
            votes++
        }else if(votes==0){
            majority=arr[i]
        }else{
            votes--
        }
    }
    return majority
}

console.log(majorityEle(nums));
