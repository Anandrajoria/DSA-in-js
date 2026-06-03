let arr = [1,2,0,3];

function duplicateZeros(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            arr[i + 1] = 0;
        }
    }
    return arr;
}

console.log(duplicateZeros(arr));