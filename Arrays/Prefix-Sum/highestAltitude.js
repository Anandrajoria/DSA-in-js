/*
====================================================
FIND THE HIGHEST ALTITUDE
====================================================

PLATFORM REFERENCES:
- LeetCode 1732: Find the Highest Altitude

----------------------------------------------------
PROBLEM STATEMENT:
Given an array gain where gain[i] is the net altitude change
between points, return the highest altitude reached. Start at 0.

----------------------------------------------------
EXAMPLES:
Input:  [-4,-3,-2,-1,4,3,2]
Output: 0

Input:  [-5,1,5,0,-7]
Output: 1

----------------------------------------------------
INTUITION:
Altitude at each point is the running prefix sum of gains.
Track the maximum running altitude.

----------------------------------------------------
APPROACH:
1. Start altitude and highest at 0.
2. Add each gain to altitude.
3. Update highest after every step.
4. Return highest.

----------------------------------------------------
DRY RUN:
gain = [-5,1,5,0,-7]
altitudes: 0, -5, -4, 1, 1, -6
highest = 1

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Highest can remain 0.
- All positive gains keep increasing.
- Empty gain array returns 0.

====================================================
*/

let arr=[-4,-3,-2,-1,4,3,2]

function highestAltitude(arr){
    let altitude=0
    for(let i=0;i<arr.length-1;i++){
        arr[i+1]+=arr[i]
    }

    let max=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
console.log(highestAltitude(arr.slice()));

function highestAltitude2(gain) {
    let altitude = 0;
    let highest = 0;

    for(let i = 0; i < gain.length; i++) {
        altitude += gain[i];
        highest = Math.max(highest, altitude);
    }

    return highest;
}
console.log(highestAltitude2(arr));
