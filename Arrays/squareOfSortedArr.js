let arr=[-4,-1,0,3,10]

function squareOfSortedArr(arr){
    let p1=0
    let p2=arr.length-1
    let sortedarr=new Array(arr.length)
    let idx=arr.length-1

    while(p1<=p2){
        let leftSquare=arr[p1]*arr[p1]
        let rightSquare=arr[p2]*arr[p2]

        if(leftSquare>rightSquare){
            sortedarr[idx]=leftSquare
            p1++
        }else{
            sortedarr[idx]=rightSquare
            p2--
        }
        idx--
    }

    return sortedarr
    
}

console.log(squareOfSortedArr(arr));
