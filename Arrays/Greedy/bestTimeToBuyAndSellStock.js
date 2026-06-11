/*
====================================================
BEST TIME TO BUY AND SELL STOCK
====================================================

PLATFORM REFERENCES:
- LeetCode 121: Best Time to Buy and Sell Stock

----------------------------------------------------
PROBLEM STATEMENT:
Given an array where each element represents a stock price
on a day, find the maximum profit possible by choosing one
day to buy and a later day to sell.

----------------------------------------------------
EXAMPLES:
Input:  [7,1,5,3,6,4]
Output: 5
Explanation: Buy at 1 and sell at 6.

Input:  [7,6,4,3,1]
Output: 0
Explanation: No profitable transaction exists.

----------------------------------------------------
INTUITION:
To maximize profit, keep track of the cheapest price seen so
far and calculate profit if selling on the current day.

----------------------------------------------------
APPROACH:
1. Store the first price as the current minimum buying price.
2. Traverse remaining prices.
3. Update maximum profit using current price - minimum price.
4. Update minimum price whenever a cheaper price appears.

----------------------------------------------------
DRY RUN:
arr = [7,1,5,3,6,4]
min = 7, max = 0
price 1 -> min becomes 1
price 5 -> profit 4, max becomes 4
price 3 -> profit 2, max stays 4
price 6 -> profit 5, max becomes 5
price 4 -> profit 3, max stays 5

----------------------------------------------------
TIME COMPLEXITY:
O(n), because the prices are scanned once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only two variables are used.

----------------------------------------------------
EDGE CASES:
- Prices always decreasing returns 0.
- Single day gives no opportunity to sell.
- Lowest price appearing after highest price cannot create profit.

====================================================
*/
let arr=[7,1,5,3,6,4]

function maxProfit(arr){
    // min keeps the best buying price seen before selling.
    let min=arr[0];
    let max=0

    for(let i=1;i<arr.length;i++){
        if(arr[i]-min>max){
            max=arr[i]-min
        }

        if(arr[i]<min){
            min=arr[i]
        }
    }
return max

}

console.log(maxProfit(arr));
