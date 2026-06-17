/*
====================================================
KTH CHARACTER AFTER STRING OPERATIONS
====================================================

PLATFORM REFERENCES:
- Custom String Simulation / Reverse Processing

----------------------------------------------------
PROBLEM STATEMENT:
Given a string with operations, return the kth character after
processing. Normal letters append, "*" deletes last, "#"
duplicates the result, and "%" reverses the result.

----------------------------------------------------
EXAMPLES:
Input:  s = "a#b%*", k = 1
Output: "a"

----------------------------------------------------
INTUITION:
Instead of building a huge final string, first compute its final
length, then walk backward through operations to map k back to
the original character.

----------------------------------------------------
APPROACH:
1. Scan forward to compute final length.
2. If k is outside length, return ".".
3. Scan backward and reverse each operation's effect on k.
4. Return the matched character.

----------------------------------------------------
DRY RUN:
"a#b%*" builds "ba"; k = 1 points to "a".

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- k outside final length returns ".".
- "*" on empty length is ignored.
- "#" can grow length quickly.

====================================================
*/

let str="a#b%*"

function processString(s,k){

    let len=0

    for(let i=0;i<s.length;i++){
        if(s[i]>="a" && s[i]<='z'){
            len+=1
        }else if(s[i]=="*"){
            if(len>0) len-=1
        }else if(s[i]=='#'){
            len*=2
        }else if(s[i]=="%"){
            len
        }

    }

if(k>=len){
    return "."
}


    let currentlen=len

    for(let i=s.length-1;i>=0;i--){
        if(s[i]=="#"){
            let previousLen=currentlen/2
            k=k%previousLen
            currentlen=previousLen
        }else if(s[i]=="%"){
            k=currentlen-1-k
        }else if(s[i]=="*"){
            currentlen+=1
        }else{
            if(k==currentlen-1){
                return s[i]
            }currentlen-=1
        }
    }

    return '.'
}

console.log(processString(str,1));
