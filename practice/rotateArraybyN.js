function rotateArrByN(arr, n) {
  n = n % arr.length;

  let rotated=[]

  for(let i=n;i<arr.length;i++){
    rotated.push(arr[i])
  }
  for(let i=0;i<n;i++){
    rotated.push(arr[i])
  }
  return rotated
}

let arr = [1, 2, 3, 4, 5];
console.log(rotateArrByN(arr,3));
