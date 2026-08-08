/*
====================================================
MINIMUM NUMBER OF PUSHES TO TYPE WORD II
====================================================

PLATFORM REFERENCES:
- LeetCode 3016: Minimum Number of Pushes to Type Word II

----------------------------------------------------
PROBLEM STATEMENT:
Given a lowercase word, assign letters to keys so the total
number of pushes needed to type the word is minimized.

----------------------------------------------------
EXAMPLES:
Input:  "aabbccddeeffgghhiiiiii"
Output: 24

----------------------------------------------------
INTUITION:
More frequent letters should receive lower push costs. Sort
letter frequencies in descending order.

----------------------------------------------------
APPROACH:
1. Count frequency of each letter.
2. Sort frequencies descending.
3. First 8 frequencies cost 1 push each.
4. Next 8 cost 2 pushes each, and so on.
5. Sum frequency * cost.

----------------------------------------------------
DRY RUN:
Most frequent letters are assigned to cost 1 positions first.
Less frequent letters move to cost 2 or more.

----------------------------------------------------
TIME COMPLEXITY:
O(n + 26 log 26), effectively O(n).

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because frequency array size is fixed at 26.

----------------------------------------------------
EDGE CASES:
- Empty word returns 0.
- All same letters cost frequency * 1.
- Only lowercase English letters are expected.

====================================================
*/

let word='aabbccddeeffgghhiiiiii'

function minimumPushII(word){
    let freq=new Array(26).fill(0)

    for(let ch of word){
        freq[ch.charCodeAt(0)-97]++
    }
    freq.sort((a,b)=>b-a)

    let ans=0

    for(let i=0;i<freq.length;i++){
        if(freq[i]==0) break

        let cost=Math.floor(i/8)+1

        ans+=freq[i]*cost
    }
    return ans
}

console.log(minimumPushII(word));
