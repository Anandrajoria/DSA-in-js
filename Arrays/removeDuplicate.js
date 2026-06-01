let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

/*
Topic: Arrays - Remove Duplicates from Sorted Array
Problem pattern: Two pointers / in-place overwrite

Goal:
- Keep only one copy of every unique value.
- Modify the same sorted array and return the new valid length.

Important condition:
- The input array must be sorted.
- Because duplicates are side by side, we only need to compare the
  current value with the last unique value we kept.

Complexity:
- Time: O(n), because we scan the array once.
- Space: O(1), because the answer is written inside the same array.

Trick to remember:
- x points to the last unique element.
- i searches for the next bigger/different element.
- When nums[i] is different from nums[x], move x and write nums[i].

Edge cases:
- Empty array should return 0.
- An array with all same values returns 1.
- An array with no duplicates returns nums.length.
*/
function removeDuplicate(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[x]) {
      x += 1;
      nums[x] = nums[i];
    }
  }

  return x + 1;
}

console.log(removeDuplicate(arr));
