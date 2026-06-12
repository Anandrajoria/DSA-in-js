/*
====================================================
BEST TIME TO BUY AND SELL STOCK II
====================================================

PLATFORM REFERENCES:
- LeetCode 122: Best Time to Buy and Sell Stock II

----------------------------------------------------
PROBLEM STATEMENT:
Given an array of stock prices, calculate the maximum profit
you can make with as many buy-sell transactions as needed.
You must sell before buying again.

----------------------------------------------------
EXAMPLES:
Input:  [7,1,5,3,6,4]
Output: 7
Explanation: Buy at 1, sell at 5; buy at 3, sell at 6.

Input:  [1,2,3,4,5]
Output: 4

----------------------------------------------------
INTUITION:
Every upward price movement can be taken as profit. Adding all
positive day-to-day differences gives the best total profit.

----------------------------------------------------
APPROACH:
1. Start maxProfit at 0.
2. Traverse prices from index 1.
3. If today price is greater than yesterday price, add the gain.
4. Return total profit.

----------------------------------------------------
DRY RUN:
arr = [7,1,5,3,6,4]
1 to 5 -> add 4
3 to 6 -> add 3
Total profit = 7

----------------------------------------------------
TIME COMPLEXITY:
O(n), because prices are scanned once.

----------------------------------------------------
SPACE COMPLEXITY:
O(1), because only one profit variable is used.

----------------------------------------------------
EDGE CASES:
- Decreasing prices return 0.
- Increasing prices return last - first.
- Single price gives 0 profit.

====================================================
*/

let arr=[7,1,5,3,6,4]

function bestTime(nums){
    let maxProfit=0

    for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            maxProfit+=nums[i]-nums[i-1]
        }
    }
    return maxProfit
}
console.log(bestTime(arr))
