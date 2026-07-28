/*
====================================================
MAXIMUM PRODUCT OF THREE NUMBERS
====================================================

PLATFORM REFERENCES:
- LeetCode 628: Maximum Product of Three Numbers

----------------------------------------------------
PROBLEM STATEMENT:
Given an integer array, find the maximum product of any three
numbers.

----------------------------------------------------
EXAMPLES:
Input:  [4,2,3,6]
Output: 72

Input:  [-10,-10,5,2]
Output: 500

----------------------------------------------------
INTUITION:
The maximum product is either the product of the three largest
numbers or the largest number times the two smallest negatives.

----------------------------------------------------
APPROACH:
1. Track the top three maximum values.
2. Track the two minimum values.
3. Compare max1 * max2 * max3 with max1 * min1 * min2.
4. Return the larger product.

----------------------------------------------------
DRY RUN:
arr = [4,2,3,6]
max1 = 6, max2 = 4, max3 = 3
min1 = 2, min2 = 3
answer = 6 * 4 * 3 = 72

----------------------------------------------------
TIME COMPLEXITY:
O(n)

----------------------------------------------------
SPACE COMPLEXITY:
O(1)

----------------------------------------------------
EDGE CASES:
- Negative numbers can produce a large positive product.
- Array length must be at least 3.
- Duplicates are valid.

====================================================
*/

let arr=[4,2,3,6]

function maxmimumProduct(arr){

let max1 = -Infinity;
let max2 = -Infinity;
let max3 = -Infinity;

let min1 = Infinity;
let min2 = Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max1){
            max3=max2
            max2=max1
            max1=arr[i]
        }else if(arr[i]>max2){
            max3=max2
            max2=arr[i]
        }else if(arr[i]>max3){
            max3=arr[i]
        }

        if(arr[i]<min1){
            min2=min1
            min1=arr[i]
        }else if(arr[i]<min2){
            min2=arr[i]
        }
    }
    return Math.max(
        max1*max2*max3,max1*min1*min2
    )
}

console.log(maxmimumProduct(arr));
