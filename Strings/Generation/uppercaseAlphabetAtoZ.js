/*
====================================================
GENERATE UPPERCASE ALPHABET A TO Z
====================================================

PLATFORM REFERENCES:
- Basic String / ASCII Practice

----------------------------------------------------
PROBLEM STATEMENT:
Generate an array containing uppercase English letters from
A to Z.

----------------------------------------------------
EXAMPLES:
Output:
["A","B","C",...,"Z"]

----------------------------------------------------
INTUITION:
Uppercase letters have continuous ASCII codes from 65 to 90.
Convert each code to a character.

----------------------------------------------------
APPROACH:
1. Create an empty array.
2. Loop from ASCII code 65 to 90.
3. Convert each code using String.fromCharCode().
4. Push the character into the array.
5. Return the array.

----------------------------------------------------
DRY RUN:
i = 65 -> "A"
i = 66 -> "B"
...
i = 90 -> "Z"

----------------------------------------------------
TIME COMPLEXITY:
O(1), because exactly 26 letters are generated.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because output size is fixed at 26.

----------------------------------------------------
EDGE CASES:
- No input is required.
- ASCII range must stay 65 to 90 for uppercase letters.

====================================================
*/

function AtoZ(){
    let arr=[]

    for(let i=65;i<=90;i++){
        arr.push(String.fromCharCode(i))

    }
    return arr
}

console.log(AtoZ());
