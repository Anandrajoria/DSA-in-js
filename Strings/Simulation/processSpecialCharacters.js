/*
====================================================
PROCESS STRING WITH SPECIAL CHARACTERS
====================================================

PLATFORM REFERENCES:
- Custom String Simulation Problem

----------------------------------------------------
PROBLEM STATEMENT:
Process a string where "*" removes the last character, "#"
duplicates the current result, and "%" reverses the result.

----------------------------------------------------
EXAMPLES:
Input:  "a#b%*"
Output: "ba"

----------------------------------------------------
INTUITION:
Build the result left to right. Special characters act like
commands that modify the current result.

----------------------------------------------------
APPROACH:
1. Start result as an empty string.
2. Traverse each character.
3. Apply command rules for "*", "#", and "%".
4. Append normal characters.

----------------------------------------------------
DRY RUN:
"a" -> "a"
"#" -> "aa"
"b" -> "aab"
"%" -> "baa"
"*" -> "ba"

----------------------------------------------------
TIME COMPLEXITY:
O(n * m), because string operations may copy content.

----------------------------------------------------
SPACE COMPLEXITY:
O(m), where m is the result length.

----------------------------------------------------
EDGE CASES:
- "*" on empty result does nothing.
- "#" can grow output quickly.
- Empty input returns empty string.

====================================================
*/

let str = "a#b%*";

function processingSpecicalChar(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "*") {
      if (result.length > 0) {
        result = result.slice(0, -1);
      }
    } else if (str[i] === "#") {
      result += result;
    } else if (str[i] === "%") {
      result = result.split("").reverse().join("");
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(processingSpecicalChar(str));
