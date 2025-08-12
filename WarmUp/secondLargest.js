// find the second largest in an array

function secondLargest(arr) {
    if(arr.length<2){
        return null
    }
    let firstLargest=-Infinity
    let secondLargest=-Infinity
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]>firstLargest){
            secondLargest=firstLargest
            firstLargest=arr[i]
        }else if(arr[i]>secondLargest){
            secondLargest=arr[i]
        }
    }
    return secondLargest
}

let arr=[4,7,8,2,9,5,2]
let result=secondLargest(arr)
console.log(result);
