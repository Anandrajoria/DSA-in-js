function isSorted(n,arr){
    
    for(let i=0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            return 0
        }
    }
    return 1
}
let n=5
let arr=[4,5,4,4,4]
console.log(isSorted(n,arr));
