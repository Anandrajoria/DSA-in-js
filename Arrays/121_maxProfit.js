let arr=[7,1,5,3,6,4]

function maxProfit(arr){
    let min=arr[0];
    let max=0

    for(let i=1;i<arr.length;i++){
        if(arr[i]-min>max){
            max=arr[i]-min
        }

        if(arr[i]<min){
            min=arr[i]
        }
    }
return max

}

console.log(maxProfit(arr));
