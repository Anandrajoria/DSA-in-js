//! slection sort 
let temp;
function SlectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        if(i!==min){
            temp=arr[i]
            arr[i]=arr[min]
            arr[min]=temp
        }
    }
    return arr
}

const res=SlectionSort([0,2,34,22,10,19])
console.log(res);

// Test case with negative numbers
const res2 = SlectionSort([-5, 12, -2, 0, 8, -10]);
console.log(res2);

// Test case with duplicate numbers
const res3 = SlectionSort([3, 1, 3, 5, 2, 1, 4]);
console.log(res3);
