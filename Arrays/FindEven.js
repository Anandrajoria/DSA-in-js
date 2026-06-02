let arr=[12,234,2,3,2345]

function findEven(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(String(arr[i]).length%2==0){
            count++
        }
    }
    return count
}

console.log(findEven(arr));


