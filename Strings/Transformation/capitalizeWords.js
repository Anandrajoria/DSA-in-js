/*
====================================================
CAPITALIZE WORDS IN A STRING
====================================================

PLATFORM REFERENCES:
- String Transformation Practice

----------------------------------------------------
PROBLEM STATEMENT:
Given a string with words and extra spaces, trim the string,
normalize spaces, and capitalize the first character of each
word while making the remaining characters lowercase.

----------------------------------------------------
EXAMPLES:
Input:  "hello     world   "
Output: "Hello World"

----------------------------------------------------
INTUITION:
Split the string into words, transform each word, then join the
words back with a single space.

----------------------------------------------------
APPROACH:
1. Trim leading and trailing spaces.
2. Split by one or more spaces using regex.
3. Capitalize first character of every word.
4. Lowercase the remaining characters.
5. Join words with a single space.

----------------------------------------------------
DRY RUN:
"hello     world   "
trim -> "hello     world"
split -> ["hello", "world"]
map -> ["Hello", "World"]
join -> "Hello World"

----------------------------------------------------
TIME COMPLEXITY:
O(n), where n is the string length.

----------------------------------------------------
SPACE COMPLEXITY:
O(n), because split/map/join create new strings and arrays.

----------------------------------------------------
EDGE CASES:
- Extra spaces between words are normalized.
- Already capitalized words are converted consistently.
- Empty or only-space string needs guard handling in production code.

====================================================
*/

let s="hello     world   "

function CapatilizeStr(s){
   return  s.trim().split(/\s+/).map(word=>
        word[0].toUpperCase()+word.slice(1).toLowerCase()
    ).join(" ")
}

console.log(CapatilizeStr(s));
