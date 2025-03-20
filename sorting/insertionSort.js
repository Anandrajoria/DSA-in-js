function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = cur;
  }
  return arr;
}

let res = insertionSort([8, 2, 4, 1, 3]);
console.log(res);
