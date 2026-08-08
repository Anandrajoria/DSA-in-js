/*
====================================================
REMOVE DUPLICATES FROM UNSORTED ARRAY
====================================================

PLATFORM REFERENCES:
- Array Hashing Practice

----------------------------------------------------
PROBLEM STATEMENT:
Given an array, return a new array containing only the first
occurrence of each value.

----------------------------------------------------
EXAMPLES:
Input:  [1,1,1,2,3,4]
Output: [1,2,3,4]

----------------------------------------------------
INTUITION:
A map can remember which values were already added. Add a value
only the first time it appears.

----------------------------------------------------
APPROACH:
1. Create an empty map and unique array.
2. Traverse each number.
3. If number is unseen, mark it and push it.
4. Return unique.

----------------------------------------------------
DRY RUN:
1 unseen -> add
1 seen -> skip
2 unseen -> add
3 unseen -> add
4 unseen -> add

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(n)

----------------------------------------------------
EDGE CASES:
- Empty array returns [].
- All duplicates return one value.
- Object references compare by reference.

====================================================
*/

let arr=[1,1,1,2,3,4]

function removeDuplicate(arr){
    let map=new Map()
    let unique=[]

    for(let num of arr){
        if(!map.has(num)){
            map.set(num,true)
            unique.push(num)
        }
    }
    return unique
}

console.log(removeDuplicate(arr));
