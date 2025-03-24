const users = [
  { username: "a", email: "aanann@ds" },
  { username: "b", email: "bsdfjaslk" },
  { username: "c", email: "csjdf" },
  { username: "d", email: "dlkdfk" },
];
//! linear serch algorithm

var linearSearch = function (arr, value) {

    let n = arr.length;
    if (arr[n - 1] === value) return true; 

  for (let e of arr) {
    if (e["username"] === value) {
      return true;
    }
  }
  return false;
};

let res = linearSearch(users, "d");

console.log(res);


/*
Best Case (O(1)): When the target is found at the first index.

Worst Case (O(n)): When the target is at the last index or not in the array.

Average Case (O(n)): The target is somewhere in the middle.

Space Complexity (O(1)): No extra space is used except for variables. */

/*
Linear Search is used in scenarios where:

Small datasets – When the array size is small, linear search can be used without worrying about optimization.

Unsorted Data – When data is not sorted, binary search or other optimized methods are not possible.
 */