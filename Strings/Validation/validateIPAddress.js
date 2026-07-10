/*
====================================================
VALIDATE IP ADDRESS
====================================================

PLATFORM REFERENCES:
- Basic String Validation / IPv4 Practice

----------------------------------------------------
PROBLEM STATEMENT:
Given a string, check whether it is a valid IPv4 address.
An IPv4 address has exactly four numeric parts separated by dots,
and each part must be from 0 to 255 with no leading zeroes.

----------------------------------------------------
EXAMPLES:
Input:  "222.222.111"
Output: false

Input:  "192.168.1.1"
Output: true

----------------------------------------------------
INTUITION:
Split by dots and validate every part independently.

----------------------------------------------------
APPROACH:
1. Split the string by ".".
2. Ensure there are exactly 4 parts.
3. Reject empty parts and leading zeroes.
4. Ensure each part contains only digits.
5. Convert to number and check range 0 to 255.

----------------------------------------------------
DRY RUN:
"192.168.1.1"
parts = ["192","168","1","1"]
all parts are numeric and within 0..255
return true

----------------------------------------------------
TIME COMPLEXITY:
O(n), where n is the string length.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because IPv4 has exactly 4 parts.

----------------------------------------------------
EDGE CASES:
- Missing parts return false.
- Leading zero like "01" returns false.
- Values greater than 255 return false.

====================================================
*/

let s='222.222.111'

function validateIP(s){
    let parts=s.split(".")

    if(parts.length!==4){
        return false
    }

    for(let part of parts){
        if(part=="") return false
        if(part.length>1 && part[0]=="0") return false
        if(!/^\d+$/.test(part)) return false

        let num=Number(part)
        if(num<0||num>255){
            return false
        }
    }
    return true
}

console.log(validateIP(s));
