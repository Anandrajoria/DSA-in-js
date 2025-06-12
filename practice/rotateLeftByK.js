function rotateLeftAByK(arr, d) {

    // Input validation
    if (!Array.isArray(arr)) throw new Error("Input must be an array");
    if (!Number.isInteger(d) || d < 0) throw new Error("d must be a non-negative integer");
    
    // Handle edge cases
    if (arr.length <= 1 || d === 0) return arr;
    d = d % arr.length; // Normalize d
    if (d === 0) return arr;

  let temp = new Array(d);

      for(let i=0;i<d;i++){
          temp[i]=arr[i]
      }


      //shifting remaining element by d
      for(let i=d;i<arr.length;i++){
        arr[i-d]=arr[i]
    }

    // add temp values to end of array
    for(let i=0;i<d;i++){
        arr[arr.length-d+i]=temp[i]
    }
    return arr
}

console.log(rotateLeftAByK([1, 2, 3, 4, 5], 2));



