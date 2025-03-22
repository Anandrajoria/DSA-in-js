//! find the second largest and second smallest number in an array
/*

function secondLargest(arr){
    if(arr.length===0 || arr.length===1){
        console.log(-1," " ,-1);
        return;
    }

    let small=Infinity
    let secondSmall=Infinity
    let large=-Infinity
    let secondLarge=-Infinity

    for(let i=0;i<arr.length;i++){
        small= Math.min(small,arr[i])
        large=Math.max(large,arr[i])
    }

    for(let i=0;i<arr.length;i++){
        if(arr[i]<secondSmall && arr[i]!==small)
            secondSmall=arr[i]
        if(arr[i]>secondLarge && arr[i]!==large)
            secondLarge=arr[i]
    }
    return 'second smallest '+secondSmall + 'second largest '+secondLarge;
    
}

console.log(secondLargest([8,5,3,1]));

*/

//!optimal approach
function secondSmallest(arr){
    if(arr.length<2)return -1;

    let small=Infinity
    let secondSmall=Infinity

    for(let i=0;i<arr.length;i++){
        if(arr[i]<small){
            secondSmall=small
            small=arr[i]
        }else if(arr[i]<secondSmall && arr[i]!==small){
            secondSmall=arr[i]
        }
    }
    return secondSmall
}

console.log(secondSmallest([8,5,3,1]));