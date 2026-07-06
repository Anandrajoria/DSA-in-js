/*
====================================================
MAXIMUM FREQUENCY SUM
====================================================

PLATFORM REFERENCES:
- LeetCode 3541: Find Most Frequent Vowel and Consonant

----------------------------------------------------
PROBLEM STATEMENT:
Given a lowercase string, find the highest frequency of any
vowel and the highest frequency of any consonant. Return their sum.

----------------------------------------------------
EXAMPLES:
Input:  "successes"
Output: 6

----------------------------------------------------
INTUITION:
Count every character, then separately track the maximum vowel
frequency and maximum consonant frequency.

----------------------------------------------------
APPROACH:
1. Build a frequency map.
2. Define vowels as "aeiou".
3. Traverse the map.
4. Update max vowel or max consonant count.
5. Return their sum.

----------------------------------------------------
DRY RUN:
"successes"
vowel max = e appears 2
consonant max = s appears 4
sum = 6

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because alphabet size is fixed.

----------------------------------------------------
EDGE CASES:
- No vowels gives vowel max 0.
- No consonants gives consonant max 0.
- Input is expected lowercase English letters.

====================================================
*/

let s='successes'

function maxFreqSum(s){
    let freq=new Map()

    for(let ch of s){
        freq.set(ch,(freq.get(ch)||0)+1)
    }

    let vowel='aeiou'

    let maxVowelFreq=0
    let maxConsFreq=0

    for(let [ch, count] of freq){
        if(vowel.includes(ch)){
            if(count>maxVowelFreq){
                maxVowelFreq=count
            }
        }else{
            if(count>maxConsFreq){
                maxConsFreq=count
            }
        }
    }
    return maxConsFreq+maxVowelFreq
}

console.log(maxFreqSum(s));
