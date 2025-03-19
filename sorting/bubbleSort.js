//! Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until the list is sorted.
function bubbleSort(arr){
    for(let i=arr.length;i>0;i--){
        console.log(i);
        let isSwapped;
        for(let j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                isSwapped=true
            }
        }
        if(!isSwapped){
            break;
        }
    }
    return arr
}

// const res=bubbleSort([5,3,4,1,2,8,6,7])
const res=bubbleSort([8,1,2,3,4,5,6,7])
console.log(res);

/**
 Time Complexity:
    Best Case (Already Sorted): O(n)
    Average Case: O(n^2)
    worst Case: O(n^2)
 */