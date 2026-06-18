/*
====================================================
ANGLE BETWEEN HANDS OF A CLOCK
====================================================

PLATFORM REFERENCES:
- LeetCode 1344: Angle Between Hands of a Clock

----------------------------------------------------
PROBLEM STATEMENT:
Given hour and minute, return the smaller angle between the
hour hand and minute hand of an analog clock.

----------------------------------------------------
EXAMPLES:
Input:  hour = 3, minute = 30
Output: 75

----------------------------------------------------
INTUITION:
The minute hand moves 6 degrees per minute. The hour hand moves
30 degrees per hour plus 0.5 degrees per minute.

----------------------------------------------------
APPROACH:
1. Calculate hour hand angle.
2. Calculate minute hand angle.
3. Find absolute difference.
4. Return the smaller angle between difference and 360 - difference.

----------------------------------------------------
DRY RUN:
hour = 3, minute = 30
hourAngle = 30 * 3 + 0.5 * 30 = 105
minuteAngle = 6 * 30 = 180
difference = 75

----------------------------------------------------
TIME COMPLEXITY:
O(1)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- 12 should behave like 0 degrees for hour base.
- minute = 0.
- Always return the smaller angle.

====================================================
*/

function angleClock(hour,minute){
    let hourAngle=30*hour + 0.5* minute
    let minuteAngle=6*minute
    let differene=Math.abs(hourAngle-minuteAngle)

    let angle=Math.min(differene,360-differene)

    return angle
}

console.log(angleClock(3,30));
