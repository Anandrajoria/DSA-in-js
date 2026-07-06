/*
====================================================
JEWELS AND STONES
====================================================

PLATFORM REFERENCES:
- LeetCode 771: Jewels and Stones

----------------------------------------------------
PROBLEM STATEMENT:
Given strings jewels and stones, return how many stones are also
jewels. Characters are case-sensitive.

----------------------------------------------------
EXAMPLES:
Input:  jewels = "aA", stones = "aAAbbbb"
Output: 3

----------------------------------------------------
INTUITION:
Each stone should be counted if it matches any jewel character.

----------------------------------------------------
APPROACH:
1. Start count at 0.
2. Traverse every stone.
3. Compare it with each jewel.
4. Count the stone once when matched.

----------------------------------------------------
DRY RUN:
jewels = "aA"
stones = "aAAbbbb"
a, A, A are jewels, count = 3.

----------------------------------------------------
TIME COMPLEXITY:
O(n * m), where n is stones length and m is jewels length.

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Case-sensitive matching.
- No jewels found returns 0.
- Empty stones returns 0.

====================================================
*/

let jewels='aA' ,stones="aAAbbbb"

function stone_jewles(jewels,stones){
    let count=0
    for(let i=0;i<stones.length;i++){
        for(let ch of jewels){
            if(stones[i]==ch){
                count++
                break
            }
        }
    }
    return count
}
console.log(stone_jewles(jewels,stones));
