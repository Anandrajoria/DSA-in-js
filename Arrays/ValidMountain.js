let arr=[0,3,2,1]

function validMountaion(){
    let i=0;

    while(arr[i]<arr[i+1]){
        i++
        
    }
    if((i===0 || i===arr.length-1)){
            return false
        }
    while(arr[i]>arr[i+1]){
        i++

    }
    return i===arr.length-1
}

console.log(validMountaion(arr))