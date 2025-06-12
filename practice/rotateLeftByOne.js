// left shift the array by one

function leftShift(arr){
    if (arr.length === 0) return arr;
    let first = arr.shift()
    arr.push(first)
    return arr
}

// console.log(leftShift([2,3,4,5]));

//! second method == brootforce mwthod

function solve(arr,n){
    let temp= new Array(n)
    for(let i=1;i<n;i++){
        temp[i-1]=arr[i]
    }
    temp[n-1]=arr[0]

    return temp
}

// let n = 5;
// let arr = [1, 2, 3, 4, 5];
// console.log(solve(arr, n));

// ?  Time Complexity: O(n), as we iterate through the array only once.


// optimal approach without making new array

function leftRotate(nums){
    let temp=nums[0]

    for(let i=0;i<nums.length-1;i++){
        nums[i]=nums[i+1]
    }

    nums[nums.length-1]=temp

    return nums

}


let arr = [1, 2, 7, 4, 5];
console.log(leftRotate(arr));