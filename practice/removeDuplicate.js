function removeDuplicates(arr) {
    if (arr.length === 0) return [];

    let i = 0; // points to last unique element

    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j]; // move next unique element forward
        }
    }

    // Return array up to the last unique element
    return arr.slice(0, i + 1);
}

console.log(removeDuplicates([1,1,2,3,5,5]));
