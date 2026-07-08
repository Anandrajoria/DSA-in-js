/*
====================================================
REMOVE COVERED INTERVALS
====================================================

PLATFORM REFERENCES:
- LeetCode 1288: Remove Covered Intervals

----------------------------------------------------
PROBLEM STATEMENT:
Given a list of intervals, remove intervals that are covered by
another interval. Return the number of remaining intervals.

----------------------------------------------------
EXAMPLES:
Input:  [[3,6],[2,8],[1,4]]
Output: 2

----------------------------------------------------
INTUITION:
Sort intervals by start ascending. For equal starts, sort end
descending so larger intervals appear first. Then an interval is
covered if its end is not greater than the largest end seen.

----------------------------------------------------
APPROACH:
1. Sort by start ascending and end descending.
2. Track largestEnd.
3. Skip intervals whose end is <= largestEnd.
4. Count intervals that extend beyond largestEnd.

----------------------------------------------------
DRY RUN:
[[1,4],[2,8],[3,6]]
largestEnd = 4
[2,8] extends, count 2, largestEnd 8
[3,6] covered by [2,8], skip

----------------------------------------------------
TIME COMPLEXITY:
O(n log n), because sorting dominates.

----------------------------------------------------
SPACE COMPLEXITY:
O(1) extra space, ignoring sort internals.

----------------------------------------------------
EDGE CASES:
- Same start intervals need larger end first.
- No covered intervals returns original length.
- Fully nested intervals collapse to one count.

====================================================
*/

let arr=[[3,6],[2,8],[1,4]]

function removeCoveredInterval(arr){
    arr.sort((a,b)=>{
        if(a[0]==b[0]){
            return b[1]-a[1]
        }
        return a[0]-b[0]
    })

    let count=1

    let largestEnd=arr[0][1]

    for(let i=1;i<arr.length;i++){
        if(arr[i][1]<=largestEnd){
            continue
        }
        count++
        largestEnd=arr[i][1]
    }
    return count
}

console.log(removeCoveredInterval(arr));
