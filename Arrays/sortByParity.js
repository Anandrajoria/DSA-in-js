let arr=[3,1,2,4]


function paritySort(arr){
    let p=0

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            let temp=arr[i]
            arr[i]=arr[p]
            arr[p]=temp
            p++
        }
    }
    return arr
    
}

console.log(paritySort(arr));
