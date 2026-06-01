let arr = [1, 1, 1, 2, 2, 3];

/*
Topic: Arrays - Remove Duplicates from Sorted Array II
Problem pattern: Two pointers / slow-fast pointer

Goal:
- Keep each unique value at most 2 times.
- Modify the same array in-place and return the new valid length.

Important condition:
- This pattern works because the array is sorted.
- Equal values stay together, so comparing with arr[x - 2] tells us if
  the current value already appeared twice in the kept part.

Complexity:
- Time: O(n), because every element is visited once.
- Space: O(1), because no extra array is used.

Trick to remember:
- "Compare current number with the number 2 places behind the write index."
- If arr[i] !== arr[x - 2], we can safely keep arr[i].

Dry idea:
- x is the write pointer.
- i scans every element.
- The first 2 elements are always allowed.
*/
function removeDuplicate(arr) {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (x < 2 || arr[i] !== arr[x - 2]) {
      arr[x] = arr[i];
      x++;
    }
  }
  return x;
}

console.log(removeDuplicate(arr));
