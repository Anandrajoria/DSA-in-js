/*
====================================================
TWO SUM
====================================================

PLATFORM REFERENCES:
- LeetCode 1: Two Sum

----------------------------------------------------
PROBLEM STATEMENT:
Given an array of integers and a target, return indices of the
two numbers such that they add up to the target.

----------------------------------------------------
EXAMPLES:
Input:  nums = [2,7,11,15], target = 9
Output: [0,1]

----------------------------------------------------
INTUITION:
For each number, check whether the needed complement was already
seen. A map gives O(1) average lookup.

----------------------------------------------------
APPROACH:
1. Create a map from number to index.
2. Traverse the array.
3. Compute need = target - current number.
4. If need exists in map, return both indices.
5. Otherwise store current number and index.

----------------------------------------------------
DRY RUN:
arr = [2,7,11,15], target = 9
i = 0, need = 7, store 2 -> 0
i = 1, need = 2, found index 0
return [0,1]

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(n)

----------------------------------------------------
EDGE CASES:
- Duplicate values can form the answer.
- No answer returns undefined in this implementation.
- Each input is usually guaranteed to have one answer.

====================================================
*/

let arr=[2,7,11,15]

function twoSum(arr,tar){
    let map=new Map()

    for(let i=0;i<arr.length;i++){
        let need=tar-arr[i]

        if(map.has(need)){
            return [map.get(need),i]
        }
        map.set(arr[i],i)
    }
}

console.log(twoSum(arr,9));
