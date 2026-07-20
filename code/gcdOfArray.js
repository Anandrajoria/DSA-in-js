let arr=[2,3,4,5,6,9,10]

function gccdOfArray(arr){
    let min=arr[0]
    let max=arr[0]
    for(let num of arr){
        if(num<min) min=num
        if(num>max) max=num
    }

    while(max!==0){
        let reminder=min%max
        min=max
        max=reminder
    }
    return min
}

console.log(gccdOfArray(arr));


