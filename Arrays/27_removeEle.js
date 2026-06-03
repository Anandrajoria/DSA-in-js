let arr = [2, 3, 3, 2];
let val = 3;

function removeEle(arr, val) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      arr[x] = arr[i];
      x += 1;
    }
  }
  return x;
}

let count = removeEle(arr, val);
console.log(count);

console.log(arr.slice(0, count));
