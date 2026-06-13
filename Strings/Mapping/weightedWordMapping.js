/*
====================================================
WEIGHTED WORD MAPPING
====================================================

PLATFORM REFERENCES:
- Custom String Mapping Problem

----------------------------------------------------
PROBLEM STATEMENT:
Given an array of lowercase words and an array of 26 weights,
calculate each word's total character weight. Convert each word
into one mapped character using 25 - (wordWeight % 26).

----------------------------------------------------
EXAMPLES:
Input:  words = ["abcd","def","xyz"]
Output: A mapped lowercase string based on the weight rules.

----------------------------------------------------
INTUITION:
Each character maps to a weight using its alphabet index.
The total word weight is compressed into one letter using modulo.

----------------------------------------------------
APPROACH:
1. Initialize result as an empty string.
2. For each word, calculate wordWeight.
3. For each character, convert it to index using charCodeAt.
4. Add the corresponding weight.
5. Convert the final mapped index back to a character.

----------------------------------------------------
DRY RUN:
word = "abcd"
a -> index 0 -> weight[0]
b -> index 1 -> weight[1]
c -> index 2 -> weight[2]
d -> index 3 -> weight[3]
wordWeight % 26 gives the compressed value.

----------------------------------------------------
TIME COMPLEXITY:
O(total characters), because every character is processed once.

----------------------------------------------------
SPACE COMPLEXITY:
O(w), where w is the number of words in the output string.

----------------------------------------------------
EDGE CASES:
- Empty words array returns an empty string.
- Only lowercase a-z characters are expected.
- weights should contain exactly 26 values.

====================================================
*/

let words = ["abcd","def","xyz"], weights = [5,3,12,14,1,2,3,2,10,6,6,9,7,8,7,10,8,9,6,9,9,8,3,7,7,2]

function mapWordWeights(words,weight){
    let result=''

    for(let word of words){
        let wordWeight=0

        for(let ch of word){
            let idx=ch.charCodeAt(0)-97
            wordWeight+=weight[idx]
        }

        let mod=wordWeight%26
        let mappedword=25-mod

        result+=String.fromCharCode(mappedword+97)
    }
    return result
}

console.log(mapWordWeights(words,weights));
