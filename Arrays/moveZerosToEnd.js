function moveZerosToEnd(arr){
    let pos=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[pos]=arr[i]
            pos++
        }
    }

    for(let i=pos;i<arr.length;i++){
        arr[i]=0
    }
    return arr
}
let arr=[1, 2, 0, 4, 3, 0, 5, 0]

console.log(moveZerosToEnd(arr));
